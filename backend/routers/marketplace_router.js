import express from "express";
import dotenv from "dotenv";
import { getAllDocuments } from "../db/mongodb_functions.js";

dotenv.config();

export const router = express();

router.get('/', async (req, res) => {
    try {
        const documents = getAllDocuments();
        const questionsWithData = await Promise.all(documents.map(async (doc) => {
            try {
                const blobData = await downloadBLOB(doc.Blob_id);
                return {
                    _id: doc._id,
                    email: doc.Email,
                    blob_id: doc.Blob_id,
                    is_solved: doc.Is_solved,
                    title: blobData.Title,
                    text: blobData.Text,
                    eth: blobData.Eth,
                    content: blobData.Content,
                    is_text: blobData.is_text
                };
            } catch (blobError) {
                console.error(`Error fetching blob data for id ${doc.Blob_id}:`, blobError);
                return {
                    _id: doc._id,
                    email: doc.Email,
                    blob_id: doc.Blob_id,
                    is_solved: doc.Is_solved,
                    error: 'Failed to fetch blob data'
                };
            }
        }));
        res.json({ 
            questions: questionsWithData,
            count: questionsWithData.length 
        });

    } catch (error) {
        console.error('Error in /marketplace route:', error);
        res.status(500).json({ 
            error: 'Failed to fetch marketplace data',
            message: error.message 
        });
    }
});
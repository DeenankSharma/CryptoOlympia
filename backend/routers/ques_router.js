import express from "express";
import { uploadBLOB } from "../walrus_storage/walrus_functions.js";
import { getDocuments, insertDocument } from "../db/mongodb_functions.js";


export const router = express();

router.post('/question',(req,res)=>{
    const email = req.body['email'];
    const eth = req.body['reward'];
    const title = req.body['title'];
    const text = req.body['text'];
    const content = req.body['content'];
    const is_text = req.body['is_text'];
    var data_for_blob={
        Email:email,
        Text:text,
        Eth:eth,
        Title:title,
        Content:content,
        Is_text:is_text,
        }
    const resp = uploadBLOB(data_for_blob);
    const blob_id = resp.newlyCreated.blobObject.blobId;
    console.log(blob_id);
    const data_for_mongo = {
        Email:email,
        Blob_id:blob_id,
        Is_solved:false,
    }
    insertDocument(data_for_mongo);
    res.json({"message":"question uploaded","blob":blob_id}).sendStatus(200);
})


router.get('/questions', async (req, res) => {
    try {
        const email = req.headers['email'];
        if (!email) {
            return res.status(400).json({ error: 'Email is required in headers' });
        }
        const documents = getDocuments(email);
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
        console.error('Error in /questions route:', error);
        res.status(500).json({ 
            error: 'Failed to fetch questions',
            message: error.message 
        });
    }
});
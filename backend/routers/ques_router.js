import express from "express";
import { uploadBLOB } from "../walrus_storage/walrus_functions.js";
import { getDocuments, insertDocument } from "../db/mongodb_functions.js";


export const router = express();

router.post('/question',(req,res)=>{
    const email = req.body['email'];
    const is_text = req.body['is_text'];
    const title = req.body['title'];
    const content = req.body['content'];
    const data_for_blob = {
        Email:email,
        Is_Text:is_text,
        Title:title,
        Content:content
    }
    const resp = uploadBLOB(data_for_blob);
    const blob_id = resp.newlyCreated.blobObject.blobId;
    console.log(blob_id);
    const data_for_mongo = {
        Email:email,
        Blob_id:blob_id,
    }
    insertDocument(data_for_mongo);
    res.json({"message":"question uploaded"})
})

router.get('/questions',(req,res)=>{
    const email = req.headers['email'];
    const documents = getDocuments(email);
    res.send({"questions":documents}); 
})
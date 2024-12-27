import {client} from './mongodb_connections.js'

export async function insertDocument(document) {
    try {
        await client.connect();
        const database = client.db("CryptoOlympia");
        const collection = database.collection("question_uploads");
        
        const result = await collection.insertOne(document);
        
        console.log(`Successfully inserted document with _id: ${result.insertedId}`);
        return result;
    } catch (error) {
        console.error('Error inserting document:', error);
        throw error;
    }
}

export async function getDocuments(email) {
    try {
        await client.connect();
        const database = client.db("CryptoOlympia");
        const collection = database.collection("question_uploads");
        const query = { Email: email };
        const documents = await collection.find(query).toArray();
        if (documents.length === 0) {
            console.log("No documents found!");
            return [];
        }
        return documents;
    } catch (error) {
        console.error('Error finding documents:', error);
        throw error;
    } finally {
        await client.close(); 
    }
}

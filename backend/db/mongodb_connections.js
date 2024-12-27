import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from "dotenv";


dotenv.config();

const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    return client.db("admin");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    throw err;
  }
}

export { connectToDatabase, client };

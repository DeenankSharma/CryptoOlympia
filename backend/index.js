import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {router as QuesRouter} from './routers/ques_router.js';
import authMiddleware from "./middleware/auth_middleware.js";

dotenv.config();

const app = express()
const port = await process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({limit:'1000mb'}));


// app.get('/test',authMiddleware,(req,res)=>{
//     res.json({"message":"pookie"});
// })

app.post('/upload', authMiddleware, QuesRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

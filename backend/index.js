import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {router as QuesRouter} from './routers/ques_router.js';
import authMiddleware from "./middleware/auth_middleware.js";
import {router as MarketPlaceRouter} from './routers/marketplace_router.js'
import {router as SolutionRouter} from './routers/solution_router.js'


dotenv.config();

const app = express()
const port = await process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({limit:'1000mb'}));

app.use('/ques', authMiddleware, QuesRouter);
app.use('/marketplace',MarketPlaceRouter);
app.use('/solution',authMiddleware,SolutionRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

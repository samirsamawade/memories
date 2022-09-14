import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import posts from './routes/posts.js'
import cors from 'cors';
import event from './routes/event.js'

//initalise
const app = express();

//middleware
dotenv.config();
app.use(cors());
app.use(express.json())


app.listen(process.env.PORT, 
  () => console.log(`Server is running on port ${process.env.PORT}`));

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err) return console.log(`Something went wrong ${err}`) 
        console.log(`Mongoose connected correctly`)
})

app.use('/api/posts', posts)
app.use('/api/event', event)

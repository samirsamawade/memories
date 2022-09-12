import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import posts from './routes/posts.js'

//initalise
const app = express();

//middleware
dotenv.config();
app.use(express.json())


app.listen(process.env.PORT, 
  () => console.log(`Server is running on port ${process.env.PORT}`));

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err) return console.log(`Something went wrong ${err}`) 
        console.log(`mongoose connected`)
})

app.use('/api/posts', posts)

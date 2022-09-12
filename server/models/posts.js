import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);



const posts = mongoose.model('Posts', postSchema);


module.exports = {Posts: posts};

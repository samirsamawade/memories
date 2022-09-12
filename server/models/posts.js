import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

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
    comment: {
      type: ObjectId,
      ref: 'Comments',
    },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema({
  comment: { type: String},
  author: { type: String, required: true},
});

const posts = mongoose.model('Posts', postSchema);
const comments = mongoose.model('Comments', commentSchema);

module.exports = {Posts: posts, Comments: comments}

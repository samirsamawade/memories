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
    event: {
      type: ObjectId,
      ref: 'Event',
    },
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
},
{ timestamps: true });

const posts = mongoose.model('Posts', postSchema);
const event = mongoose.model('Event', eventSchema);

module.exports = {Posts: posts, Event: event}

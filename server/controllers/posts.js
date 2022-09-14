const { Posts } = require("../models/posts");


export const registerPost = async (req, res) => {
  try {
    const {title, description, budget, event} = req.body;
    const post = await new Posts({title, description, budget, event}).save();
    res.json({ Status: true, message: post });
  } catch (err) {
    res.json({ Status: false, message: err });
  }
};
export const updatePost = async (req, res) => {
  try {
    const {title, description, budget, _id} = req.body;
    const update = await Posts.findByIdAndUpdate(_id, {title, description, budget});
    res.json({ Status: true, message: update });
  } catch (err) {
    res.json({ Status: false, message: err });
  }
};

export const deletePost = async (req, res) => {
  try{
    const {_id} = req.params;
    const deletePost = await Posts.findByIdAndDelete(_id);
    res.json({ Status: true, message: deletePost });
  }
  catch (err) {
    res.json({ Status: false, message: err });
    }
  };
export const getPost = async (req, res) => {
  try{
    const {_id} = req.params;
    const post = await Posts.findById(_id);
    res.json({ Status: true, message: post });
  }
  catch (err) {
    res.json({ Status: false, message: err });
    }
  };
export const getAllPosts = async (req, res) => {
  try{
    const posts = await Posts.find().populate("event").sort({"updatedAt": -1});
    res.json({ Status: true, message: posts });
  }
  catch (err) {
    res.json({ Status: false, message: err });
    }
  };
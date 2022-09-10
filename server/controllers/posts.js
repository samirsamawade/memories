import Posts from "../models/posts.js";

export const registerPost = async (req, res) => {
  // const {title, description, budget} =  Posts
  try {
    const post = await new Posts({
      title: req.body.title,
      description: req.body.description, budget: req.body.budget
    }).save();
    res.json({ Status: true, Message: post });
} catch (err) {
      res.json({ Status: false, Message: err });
  }
};

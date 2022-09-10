import Posts from "../models/posts.js";

export const registerPost = async (req, res) => {
  try {
    const post = await new Posts(req.body).save();
    res.json({ Status: true, Message: post });
  } catch (err) {
    res.json({ Status: false, Message: err });
  }
};

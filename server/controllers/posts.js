import Posts from "../models/posts.js";

export const registerPost = async (req, res) => {
  try {
    const {title, description, budget} = req.body;
    const post = await new Posts({title, description, budget}).save();
    res.json({ Status: true, Message: post });
  } catch (err) {
    res.json({ Status: false, Message: err });
  }
};
export const updatePost = async (req, res) => {
  try {
    const {title, description, budget, _id} = req.body;
    const update = await Posts.findByIdAndUpdate(_id, {title, description, budget});
    res.json({ Status: true, Message: update });
  } catch (err) {
    res.json({ Status: false, Message: err });
  }
};


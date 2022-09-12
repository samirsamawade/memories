const { Event } = require("../models/posts");


export const registerEvent = async (req, res) => {
  try {
    // const {comment, author} = req.body;
    const event = await new Event(req.body).save();
    res.json({ Status: true, Message: event });
  } catch (err) {
    res.json({ Status: false, Message: err });
  }
};

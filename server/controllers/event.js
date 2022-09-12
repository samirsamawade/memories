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

export const updateEvent = async (req, res) => {
  try {
    const {title, description, _id} = req.body;
    const update = await Event.findByIdAndUpdate(_id, {title, description});
    res.json({ Status: true, Message: update });
  } catch (err) {
    res.json({ Status: false, Message: err });
  }
};

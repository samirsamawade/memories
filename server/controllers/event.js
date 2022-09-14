const { Event } = require("../models/posts");


export const registerEvent = async (req, res) => {
  try {
    // const {comment, author} = req.body;
    const event = await new Event(req.body).save();
    res.json({ Status: true, message: event });
  } catch (err) {
    res.json({ Status: false, message: err });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const {title, description, _id} = req.body;
    const update = await Event.findByIdAndUpdate(_id, {title, description});
    res.json({ Status: true, message: update });
  } catch (err) {
    res.json({ Status: false, message: err });
  }
};

export const deleteEvent = async (req, res) => {
  try{
    const {_id} = req.params;
    const deleteEvent = await Event.findByIdAndDelete(_id);
    res.json({ Status: true, message: deleteEvent });
  }
  catch (err) {
    res.json({ Status: false, message: err });
    }
  };

  export const getEvent = async (req, res) => {
    try{
      const {_id} = req.params;
      const event = await Event.findById(_id);
      res.json({ Status: true, message: event });
    }
    catch (err) {
      res.json({ Status: false, message: err });
      }
    };

    export const getAllEvents = async (req, res) => {
      try{
        const event = await Event.find().sort({"updatedAt": -1});
        res.json({ Status: true, message: event });
      }
      catch (err) {
        res.json({ Status: false, message: err });
        }
      };

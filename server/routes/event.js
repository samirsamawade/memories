import express from 'express';
import { deleteEvent, getAllEvents, getEvent, registerEvent, updateEvent } from '../controllers/event.js';
const router = express.Router();

router.post('/create-event', registerEvent);
router.post('/update-event', updateEvent);
router.delete('/delete-event/:_id', deleteEvent);
router.get('/get-event/:_id', getEvent);
router.get('/get-all-events', getAllEvents);


export default router;
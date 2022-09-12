import express from 'express';
import { registerEvent, updateEvent } from '../controllers/event.js';
const router = express.Router();

router.post('/create-event', registerEvent);
router.post('/update-event', updateEvent);
// router.delete('/delete-post/:_id', deletePost);
// router.get('/get-post/:_id', getPost);
// router.get('/get-all-posts', getAllPost);


export default router;
import express from 'express';
import { registerEvent } from '../controllers/event.js';
const router = express.Router();

router.post('/create-event', registerEvent);
// router.post('/update-post', updatePost);
// router.delete('/delete-post/:_id', deletePost);
// router.get('/get-post/:_id', getPost);
// router.get('/get-all-posts', getAllPost);


export default router;
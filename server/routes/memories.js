import express from 'express';
import { deletePost, registerPost, updatePost } from '../controllers/posts.js';
const router = express.Router();

router.post('/create-post', registerPost);
router.post('/update-post', updatePost);
router.delete('/delete-post/:_id', deletePost);


export default router;
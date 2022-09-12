import express from 'express';
import { deletePost, getAllPosts, getPost, registerPost, updatePost } from '../controllers/posts.js';
const router = express.Router();

router.post('/create-post', registerPost);
router.post('/update-post', updatePost);
router.delete('/delete-post/:_id', deletePost);
router.get('/get-post/:_id', getPost);
router.get('/get-all-posts', getAllPosts);


export default router;
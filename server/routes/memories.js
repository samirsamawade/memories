import express from 'express';
import {  registerPost, updatePost } from '../controllers/posts.js';
const router = express.Router();

router.post('/create-post', registerPost);
router.post('/update-post', updatePost);


export default router;
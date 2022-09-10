import express from 'express';
import { registerPost } from '../controllers/posts.js';
const router = express.Router();

router.post('/create-post', registerPost);


export default router;
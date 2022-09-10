import express from 'express';
import { PostsRoute, registerPost } from '../controllers/posts.js';
const router = express.Router();

router.get('/test', PostsRoute);
router.get('/create-post', registerPost);


export default router;
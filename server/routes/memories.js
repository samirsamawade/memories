import express from 'express';
import { PostsRoute } from '../controllers/posts.js';
const router = express.Router();

router.get('/test', PostsRoute);


export default router;
import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts2.js';


const router = express.Router();

router.get('/',getPosts)
router.post('/',createPost);
router.post('/',updatePost);
router.delete('/',deletePost);


export default router;


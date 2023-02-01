import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost, dislikePost } from '../controllers/posts.js';
//import mongoose from "mongoose";
//import Post from '../../client/src/components/Posts/Post/Post.js';
//import PostProject from "../models/post.js";



const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
//router.post('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/dislikePost',dislikePost);

export default router;


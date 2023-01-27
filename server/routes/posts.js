import express from 'express';
//import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import mongoose from "mongoose";
import PostProject from "../models/post.js";

const getPosts = async (req, res)=>{
    try {
        const postProjects = await PostProject.find();
        

        res.status(200).json(postProjects);
    } catch (error) {
        //console.log(`something is wrong, not succeeded, ${error}`)
        res.status(404).json({message: error.message})
    }
}

const createPost = async (req, res)=>{
    const post = req.body;
    const newPost = new PostProject(post);

    try {
        await newPost.save();
        res.status(203).json(newPost);
        
    } catch (error) {
        res.status(407).json({message:error.message})
        
    }
    res.send('add a new story');
}

const updatePost = async (req, res) =>{
    const {id:_id } =req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that ID')
    const updatedPost = await PostProject.findbyIdAndUpdate(_id, {...post, _id}, {new:true});
    res.json(updatedPost);

}

const deletePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');
    await PostProject.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully'});
    
}
 const likePost = async (req, res) =>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')

    const post = await PostProject.findById(id);
    const updatedPost = await PostProject.findByIdAndUpdate(id,{likeCount: post.likeCount +1},{new: true});
    res.json(updatedPost);
}

const router = express.Router();

router.get('/',getPosts)
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/;id',deletePost);
router.patch('/:id/likePost', likePost);


export default router;


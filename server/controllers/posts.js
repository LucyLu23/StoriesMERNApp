import mongoose from "mongoose";
import PostProject from "../models/post.js";
import express from 'express';

const router = express.Router();

export const getPosts = async (req, res)=>{
    try {
        const postProjects = await PostProject.find();
        res.status(200).json(postProjects);
    } catch (error) {
        //console.log(`something is wrong, not succeeded, ${error}`)
        res.status(404).json({message: error.message})
    }
}

export const getPost = async (req, res)=>{
    const {id} =req.params;

    try {
        const post = await PostProject.findbyId(id);
        res.send(post);
        res.status(200).json(post);
    } catch (error) {
     
        res.status(404).json({message: error.message})
    }
}


export const createPost = async (req, res)=>{
    const { developer, project,date,tags, selectedFile} = req.body; //{developer, project,date,tags, selectedFile }
    const newPost = new PostProject({ developer, project,date,tags, selectedFile}); //{developer, project, date, tags, selectedFile}

    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(407).json({message:error.message})
        
    }

}

export const updatePost = async (req, res) =>{
    const {id} =req.params;
    const { developer, project,date,tags, selectedFile} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that ID')
    const updatedPost = {  developer, project,date,tags, selectedFile, _id: id };
  
    await PostProject.findByIdAndUpdate(id, updatePost, {new:true});
    res.json(updatedPost);

}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');
    await PostProject.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully'});
    
}
export const likePost = async (req, res) =>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')

    const post = await PostProject.findById(id);
    const updatedPost = await PostProject.findByIdAndUpdate(id,{likeCount: post.likeCount +1},{new: true});
    res.json(updatedPost);
} 

export const dislikePost = async (req, res) =>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')

    const post = await PostProject.findById(id);
    const updatedPost = await PostProject.findByIdAndUpdate(id,{dislikeCount: post.dislikeCount +1},{new: true});
    res.json(updatedPost);
} 

export default router;
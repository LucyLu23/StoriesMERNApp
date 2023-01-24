import PostStory from "../models/postStory.js";

export const getPosts = async (req, res)=>{
    try {
        const postStories = await PostStory.find();
        console.log(postStories);

        res.status(200).json(postStories);
    } catch (error) {
        //console.log(`something is wrong, not succeeded, ${error}`)
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res)=>{
    const post = req.body;
    const newPost = new PostStory(post);

    try {
        await newPost.save();
        res.status(203).json(newPost);
        
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
    res.send('add a new story');
}

export const updatePost = (req, res) =>{
    res.send('updage a story');

}

export const deletePost = (req, res) => {
    res.send('a story is gone')
}
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    project:  String,     
    developer: String,    
    date:  String,        
    tags: String,        
    selectedFile: String,
    likeCount: {
        type: Number,
        default:0
    }, 
    dislikeCount: {
        type: Number,
        default:0
    }, 
})

const PostProject = mongoose.model('PostProject', postSchema);
export default PostProject;


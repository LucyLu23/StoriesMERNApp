import axios from 'axios';

const url = 'https://finalmernapplucy.onrender.com/posts/'; //go to backend routes //5000

export const fetchPosts =() => axios.get(url);
//export const fetchPost = (id) => axios.patch(`${url}/${id}`); 
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost =(id, updatedPost) =>axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id)=>axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch (`${url}/${id}/likePost`);
export const dislikePost = (id) => axios.patch (`${url}/${id}/dislikePost`);

//https://finalmernapplucy.onrender.com
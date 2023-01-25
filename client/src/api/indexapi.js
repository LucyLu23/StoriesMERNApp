import axios from 'axios';

const url = 'http://localhost:5000/posts1.js'; //go to backend routes

export const fetchPosts =() => axios.get(url);
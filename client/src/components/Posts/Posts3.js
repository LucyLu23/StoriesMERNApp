import React from 'react';
import Post4 from './Post/Post4.js';
import posts3style from './posts3style.js';

const Posts3 = () =>{
  const classes1 = posts3style();
    return (
      <>
      <h1>POSTS</h1>
      <Post4 />
      <Post4 />
      </>
    );
  }

  export default Posts3;
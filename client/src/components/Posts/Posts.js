import { Grid, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';
import posts3style from './style.js';

const Posts = ({setCurrentId}) =>{
  const posts =useSelector((state)=>state.posts);
  const classes1 = posts3style();
    return (
      !posts.length? <CircularProgress /> : (
        <Grid className={classes1.container} container alignItems="stretch" spacing={3}>
          { posts.map((post)=>(
            <Grid key={post._id} item xs={12} sm={6} >
              <Post post={post}  setCurrentId={ setCurrentId }/>  {/* //setCurrentId={setCurrentId} */}
            </Grid>
          ))}
  
        </Grid>
      )
    );
  }

  export default Posts;
import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import formstyle from './style.js';
import {createPost, updatePost} from '../../actions/posts.js';


const Form = ({currentId,setCurrentId}) =>{
  const [postData, setPostData] =useState({project: '', developer: '', date: '', tags:'', selectedFile:''});
  const post =useSelector((state)=>currentId? state.posts.find((p)=> p._id === currentId) :null);
  const classes1 = formstyle();
  const dispatch = useDispatch();
  useEffect(()=> {
    if(post) setPostData(post);

  }, [post])

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    if(currentId) {
      dispatch(updatePost( currentId, postData));
    }else {
      dispatch(createPost(postData));
    }
    clear();   
  }
  const clear =() =>{
    setCurrentId(null);
    setPostData({project: '', developer: '', date: '', tags:'', selectedFile:''})

  }

    return (
      <Paper className={classes1.paper}>
      <form autoComplete="off" noValidate className={`${classes1.root} ${classes1.form}`} onSubmit={handleSubmit}>
      <Typography variant = "h5"> { currentId ? 'Editing' : 'Recording'} a Project </ Typography>
      <TextField name="project" variant = "outlined" label="Project" fullWidth value={postData.project} onChange={(e)=> setPostData({...postData, project: e.target.value})}      />
      <TextField name="developer" variant = "outlined" label="Developer" fullWidth value={postData.developer} onChange={(e)=> setPostData({...postData, developer: e.target.value})}/>
      <TextField name="time" variant = "outlined" label="Time" fullWidth value={postData.time} onChange={(e)=> setPostData({...postData, time: e.target.value})}/>
      <TextField name="tags" variant = "outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value})}/>
      <div className={classes1.fileInput}><FileBase type="file" multiple = {false} onDone = {({base64}) => setPostData ({...postData, selectedFile: base64})}/></div>
      <Button className={classes1.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Cancel</Button>
      </form>
    </Paper>
    );
  }

  export default Form;
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography  } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import userStyle from './style';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost} from '../../../actions/posts';
//import projectImg1 from '../../../images/Capture.PNG';
//import post4style from './style.js';
const Post = ({post, setCurrentId}) => {
  const classes = userStyle();
  const dispatch = useDispatch();    
  return (
    <Card className={classes.card}   >
      <CardMedia className={classes.media} image={post.selectedFile } title={post.title} component='div' /> 
      <div className={classes.overlay}>  
          <Typography variant="h6">{post.developer}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
          <Button 
              style={{color: 'blue'}} 
              size="small"               
              onClick={()=>setCurrentId(post._id)}> 
              <MoreVertIcon fontSize="small" />
          </Button>
      </div>
      <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">{post.tags}</Typography>         
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom component='h2'>{post.project}</Typography>   
      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" >{post.date}</Typography>         
      </CardContent>
      <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={()=> dispatch(likePost(post._id))}>
              <ThumbUpAltIcon fontSize='small' />
              &nbsp; Like &nbsp;
              {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={()=> dispatch(dislikePost(post._id))}>
              <ThumbDownAltIcon fontSize='small' />
              &nbsp; disLike &nbsp;
              {post.dislikeCount}
          </Button>
          <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize='small' />
              Delete 
          </Button>
        
      </CardActions>
</Card>
  );
}
export default Post;


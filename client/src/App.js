import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts} from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import appstyle from './appstyle.js';
import projectImage from './images/MERNApp.PNG';

const App = () =>{
    const [currentId, setCurrentId] = useState(null);
    const classes1 = appstyle();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes1.appBar} position="static" color="inherit">
                <Typography className={classes1.heading} variant="h3" align="center">PROJECTS</Typography>
                <img className={classes1.image} src={projectImage} alt="Projects" height="120" width="230" /> 
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify-content="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                        {/* <Grid item xs={13} sm={6}> */}
                            <Posts setCurrentId={setCurrentId} />

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />

                        </Grid>

                    </Grid>
                </Container>

            </Grow>
        </Container>
    )
}

export default App;
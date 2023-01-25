import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts} from './actions/posts5';
import Posts3 from './components/Posts/Posts3.js';
import Form from './components/Form/Form.js';
import appstyle from './appstyle.js';
import projectImage from './images/MERNApp.PNG';

const App = () =>{
    const classes1 = appstyle();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, []);
    return (
        <Container maxidth="lg">
            <AppBar className={classes1.appBar} position="static" color="inherit">
                <Typography className={classes1.heading} variant="h3" align="center">PROJECTS</Typography>
                <img className={classes1.image} src={projectImage} alt="Projects" height="120" width="230" /> 
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify-content="space-between" alignItems="stretch" spacing={6}>
                        <Grid item xs={13} sm={6}>
                            <Posts3 />

                        </Grid>
                        <Grid item xs={13} sm={5}>
                            <Form />

                        </Grid>

                    </Grid>
                </Container>

            </Grow>
        </Container>
    )
}

export default App;
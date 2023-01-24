import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const App = () =>{
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Stories</Typography>
                <img src={stories} alt="stories" height="90" />
            </AppBar>
        </Container>
    )
}

export default App;
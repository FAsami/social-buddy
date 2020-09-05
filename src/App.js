import React from 'react';
import Posts from './Components/Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import PostDetails from './Components/Posts/PostDetails';

import { Grid } from '@material-ui/core';
import NavBar from './Components/Header/Navbar';
function App() {
  return (
    <>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xm={0} sm={2}></Grid>
        <Grid item xm={12} sm={8}>
          <Switch>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
            <Route path="/">
              <Posts />
            </Route>
          </Switch>
        </Grid>
        <Grid item xm={0} sm={2}></Grid>
      </Grid>
    </>
  );
}

export default App;

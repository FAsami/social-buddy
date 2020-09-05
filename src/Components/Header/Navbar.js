import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  logo: {
    cursor: 'pointer',
    height: '50px',
    width: '50px',
  },
  left: {
    marginRight: 'auto',
  },
  postLink: {
    textDecoration: 'none',
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="#fff">
      <Toolbar>
        <Link to="/" className={classes.left}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </Link>
        <Button color="inherit" variant="outlined">
          <Link to="/" className={classes.postLink}>
            POSTS
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

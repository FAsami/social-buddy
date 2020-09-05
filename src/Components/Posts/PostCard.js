import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  button: { 
    textDecoration: 'none',
  },
});

export default function Comment({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
        <CardActions>
          <Button size="small" color="primary" variant="outlined">
            <Link className={classes.button} to={`posts/${post.id}`}>
              Details
            </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

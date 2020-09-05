import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    borderRadius: '50%',
    height: 100,
    width: 100,
  },
});

export default function Comment({ comment, imgSrc }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img className={classes.image} src={imgSrc} alt="Pic" />
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {comment.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {comment.email}
        </Typography>
        <Typography variant="body2" component="p">
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

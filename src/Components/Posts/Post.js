import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginBottom: 100,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
  },
  description: {
    fontSize: 18,
  },
});

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography component="h2" className={classes.title}>
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

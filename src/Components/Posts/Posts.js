import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Box, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  container: {
    marginTop: 100,
  },
});

export default function Posts() {
  const classes = useStyles();
  const [postData, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Box className={classes.container}>
      {postData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}

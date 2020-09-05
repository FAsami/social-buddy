import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import Comment from './Comment';
import { Typography } from '@material-ui/core';

export default function PostDetails() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setSinglePost(data));
  }, []);

  return (
    <>
      <Post post={singlePost} />
      <Typography variant="h5">Comments:</Typography>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          imgSrc={`https://randomuser.me/api/portraits/${
            ['men', 'women'][Math.floor(Math.random() * 2)]
          }/${Math.floor(Math.random() * 20)}.jpg`}
        />
      ))}
    </>
  );
}

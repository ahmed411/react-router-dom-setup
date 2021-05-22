import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const BlogPosts = {
    1: {
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    2: {
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    }
  };
  const { id } = useParams();
  const post = BlogPosts[id];
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

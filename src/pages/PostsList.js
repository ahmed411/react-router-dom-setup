import React from 'react';
import { Link } from 'react-router-dom';

export default function PostsList() {
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
  return (
    <ul>
      {Object.entries(BlogPosts).map(([id, { title }]) => (
        <li key={id}>
          <Link to={`/posts/${id}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

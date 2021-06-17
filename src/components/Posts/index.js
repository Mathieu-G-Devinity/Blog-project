import React from 'react';
import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts, title, zenMode }) => (
  <main className={zenMode ? 'posts posts--zen' : 'posts'}>
    <h1 className="posts-title">{title}</h1>
    <div className="posts-list">
      {
        posts.map(
          (post) => <Post key={post.id} {...post} />,
        )
      }
    </div>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  zenMode: PropTypes.bool.isRequired,
};

export default Posts;

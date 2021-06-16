import React from 'react';
import PropTypes from 'prop-types';
import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({postsData, open}) => {
  const className = open ? 'posts-list' : 'post-zen-mode';
  const classNameTitle = open ? 'posts-title' : 'posts-zen-mode-title';

return (
  <main className="posts">
    <h1 className={classNameTitle}>Dev Of Thrones</h1>
    <div className={className}>

    {
      // en écrivant ...post, on transmet au composant post
      // l'ensemble des propriétés de l'objet post
      // dans les props du composant post qui ont le même nom
    }
    {
      postsData.map(
        (post) => <Post key={post.id} {...post} open={open}/>,
      )
    }
      
    </div>
  </main>)
};

Posts.propTypes = {
  postsData: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
  open: PropTypes.bool.isRequired,
};

export default Posts;

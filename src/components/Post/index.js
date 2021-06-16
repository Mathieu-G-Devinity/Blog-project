import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Post = ({title, category, excerpt, open}) => {
  console.log(open);
  const classNamePost = open ? 'post' : 'post-zen-mode';
  const classNameTitle = open ? 'post-title' : 'post-zen-mode-title';
  const classNameCategory = open ? 'post-category' : 'post-zen-mode-category';
  const classNameExcerpt = open ? 'post-excerpt' : 'post-zen-mode-excerpt';

return (
  <article className= {classNamePost}>
    <h2 className={classNameTitle}>{title}</h2>
    <div className={classNameCategory}>{category}</div>
    <p className={classNameExcerpt}>{excerpt}</p>
  </article>
  );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired, 
};

export default Post;

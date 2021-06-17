import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './single.scss';

const Single = ({ posts }) => {
  // Ici, on extrait de la route qui a matché le paramère dynamique nommé id
  // et on le stocke dans une variable id
  const { id } = useParams();

  const post = posts.find(
    (curPost) => curPost.id === Number(id),
  );

  const { title, excerpt } = post;

  return (
    <article className="single">
      <h1 className="single--title">{title}</h1>
      <p className="single---excerpt">{excerpt}</p>
    </article>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Single;

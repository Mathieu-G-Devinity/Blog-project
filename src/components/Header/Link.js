import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ route, label}) => (

      <a className="menu-link" href={route}>{label}</a> 
);

Link.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default Link;

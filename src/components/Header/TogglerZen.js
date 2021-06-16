import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TogglerZen = ({open, toggle}) => (
  
      <button
      className="menu-btn"
      type="button"
      onClick={toggle}
      >Activer le mode zen</button>
);



export default TogglerZen;

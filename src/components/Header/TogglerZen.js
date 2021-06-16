import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TogglerZen = ({open, toggle}) => {
const zenButton = !open ? 'Désactiver le mode zen' : 'Activer le mode zen';

return (
      <button
      className="menu-btn"
      type="button"
      onClick={toggle}
      >{zenButton}</button>
);
};

TogglerZen.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default TogglerZen;

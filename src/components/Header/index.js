import React from 'react';
import TogglerZen from './TogglerZen';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({ categoriesData, toggle }) => (
  <header className="menu">
    <nav>
      <a className="menu-link menu-link--selected" href="">{categoriesData[0].label}</a>
      <a className="menu-link" href="">{categoriesData[1].label}</a>
      <a className="menu-link" href="">{categoriesData[2].label}</a>
      <TogglerZen toggle={toggle}/>
    </nav>
  </header>
);

Header.propTypes = {
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape(
      {
        label: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};


export default Header;

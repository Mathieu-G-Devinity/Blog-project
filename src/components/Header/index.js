import React from 'react';
import TogglerZen from './TogglerZen';
import Link from './Link';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({ categoriesData, toggle, open }) => (
  <header className="menu">
    <nav>
    {
      categoriesData.map(
        (category) => <Link key={category.label} {...category}/>,
      )
    }
      <TogglerZen toggle={toggle} open={open}/>
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
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};


export default Header;

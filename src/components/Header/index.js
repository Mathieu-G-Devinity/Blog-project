import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ categories, zenMode, toggleZenMode }) => (
  <header className="menu">
    <nav>
      {
        // note pour plus tard : menu-link--selected
        //
        // Pour la clé, label ou route font l'affaire
        //
        // Link permet de gérer la modification de l'historique de navigation au click
        // NavLink permet non seulement de modifier l'historique mais égalment de présenter
        // une classe différente s'il match avec la route courante
        // par défaut, il matche si le path commence par son to,
        // mais on peut demander un matching exact grâce à la prop exact
      }
      {
        categories.map(
          (category) => (
            <NavLink
              key={category.route}
              className="menu-link"
              activeClassName="menu-link--selected"
              to={category.route}
              exact
            >
              {category.label}
            </NavLink>
          ),
        )
      }
      <button
        className="menu-btn"
        type="button"
        onClick={toggleZenMode}
      >
        {zenMode ? 'Désactiver le mode zen' : 'Activer le mode zen'}
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  zenMode: PropTypes.bool.isRequired,
  toggleZenMode: PropTypes.func.isRequired,
};

export default Header;

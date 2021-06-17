// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// On importe le BrowserRouter depuis la bibliothèque react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import Blog from 'src/components/Blog';

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)

// On enrobe notre composant principal dans le composant Router
// pour rendre disponible les fonctionnalités de routage à tous nos composants
const rootComponent = (
  <Router>
    <Blog />
  </Router>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);

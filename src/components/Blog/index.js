// == Import
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Spinner from 'src/components/Spinner';
import Single from 'src/components/Single';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import { filterPostsByCategory, getTitleByCategoryLabel } from 'src/selectors';
import './styles.scss';

// == Composant
const Blog = () => {
  // State via les hooks
  // -------------------
  // La mécanique du state (useState dans un composant) permet :
  // - définir des données dans le composant
  // - si ces données changent, React refait le rendu du composant
  //   - > refait le JSX du composant et des composants imbriqués
  // => La modification d'une donnée du state passe par le "setter" fournit par useState
  //
  // const [donnée, modifierLaDonnée] = useState(valeur de départ);
  // quand on exécute useState, on récupère :
  // 1 - la donnée
  // 2 - le moyen de la modifier
  //
  // -------------------

  // on a besoin d'une variable d'état pour gérer notre zen mode
  // cette variable est un booléen : (je suis en zenmode : true ou pas : false)
  const [zenMode, setZenMode] = useState(false);

  // cette variable d'état permet de stocker notre liste de posts
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const toggleZenMode = () => {
    setZenMode(!zenMode);
  };


  const fetchPosts = () => {
    setLoading(true);   
    // à vous de récupérer la liste des posts depuis l'API
    
    
    setLoading(false);
  };

  const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
  .then(function (response) {
    // handle success
    //console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (res) {
    console.log(res);
    return(setPosts(res));
    // always executed
  });
  
  /*const axios = require('axios');

  useEffect(() => {
    axios.get('https://oclock-open-apis.vercel.app/api/blog/posts').then((res) => {
  
        return(setPosts(res.data));
    })
  });*/
  
  return (
    <div className="blog">
      <Header
        categories={categoriesData}
        toggleZenMode={toggleZenMode}
        zenMode={zenMode}
      />
      {
        // Le composant Route permet de définir une portion de l'UI à
        // afficher seulement si la valeur de sa prop path matche avec l'url courante
        //
        // Switch permet de rendre seulement la première Route ou Redirect qui matche
        // Ici, on s'en sert pour inclure une route sans path qui présente une 404
        // Dans le cas ou aucune autre Route ne matche
      }
      <button type="button" onClick={fetchPosts}>
        Charger les articles
      </button>
      {loading && <Spinner />}
      {!loading && (
        <Switch>
          {
            categoriesData.map(
              (category) => (
                <Route path={category.route} key={category.route} exact>
                  <Posts
                    posts={filterPostsByCategory(posts, category.label)}
                    title={getTitleByCategoryLabel(category.label)}
                    zenMode={zenMode}
                  />
                </Route>
              ),
            )
          }
          {
            // On montre comment gérer une redirection avec Redirect
          }
          <Route path="/post/:id">
            <Single posts={posts} />
          </Route>
          <Redirect from="/jquery" to="/autre" />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
};

// == Export
export default Blog;

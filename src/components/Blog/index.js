// == Import
import React from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
class Blog extends React.PureComponent {

  state = {
    categoriesData: categoriesData,
    postsData: postsData,
    open: true,
  }

  // on définit une propriété toggle qui est une fonction
  // utiliser une fléchée permet de ne pas perdre le this
  toggleZen = () => {
    console.log('Tu as cliqué');
    // on récupère la propriété open depuis
    // la version courante du state
    const { open } = this.state;

    // on demande une modification du state en transmettant
    // à setState un objet à fusionner avec le state.
    // une fois ces modification effectuée, un nouveau rendu du composant courant
    // sera lancé. La méthode render ser donc réexécutée.
    this.setState({
      open: !open,
    });
    //console.log(open);
  } 
  
  render() {

    const {postsData, categoriesData, open} = this.state;

    console.log(categoriesData);
    console.log(postsData);

  return (
    <div className="blog">
      <Header categoriesData= {categoriesData} open= {open} toggle= {this.toggleZen}/>
      <Posts postsData = {postsData} open= {open}/>
      <Footer />
    </div>
  );
  };
};


// == Export
export default Blog;

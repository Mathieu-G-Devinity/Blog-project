/* eslint-disable import/prefer-default-export */

// Cette fonction renvoie tous les posts si le nom de la catégorie est accueil
// et la liste des posts dont la catégorie correspond à celle recherchée dans
// le cas contraire
export const filterPostsByCategory = (posts, categoryLabel) => {
  if (categoryLabel === 'Accueil') {
    return posts;
  }

  return posts.filter(
    (post) => post.category === categoryLabel,
  );
};

export const getTitleByCategoryLabel = (categoryLabel) => (
  categoryLabel === 'Accueil' ? 'Dev of Throne' : categoryLabel
);

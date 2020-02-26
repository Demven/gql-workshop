module.exports = {
  getArticleById: (id) => {
    return {
      id,
      slug: `article-slug-${id}`,
      headline: `Article Headline for ${id}`,
    };
  },

  getAuthorsByArticleId: (id) => {
    return [
      {
        id: 'author-1',
        name: 'Elon Musk',
        email: 'elonmusk@tesla.com',
      },
      {
        id: 'author-2',
        name: 'Jeff Besos',
        email: 'jeffbesos@amazon.com',
      },
    ];
  },
};

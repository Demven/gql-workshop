// const { article } = require('./article/resolvers');

module.exports = {
  article: (args) => {
    const { id } = args;

    return {
      id,
      slug: `article-slug-${id}`,
      headline: `Article Headline for ${id}`,
      authors: (obj, args, context) => {
        console.info('authors args', args);

        // const articleId = obj.id;
        return [
          {
            id: 'author-1',
            name: 'Elon Musk',
            email: 'elonmusk@tesla.com'
          },
          {
            id: 'author-2',
            name: 'Jeff Besos',
            email: 'jeffbesos@amazon.com'
          }
        ];
      },
    };
  },
};

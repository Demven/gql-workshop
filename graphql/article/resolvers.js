module.exports = {
  article: (obj, args) => {
    console.info('obj', obj);
    console.info('args', args);

    return {
      id: 'SB123',
      slug: 'article-slug-123',
      headline: 'Article Headline'
    };
  }
};

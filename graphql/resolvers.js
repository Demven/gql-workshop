const { article, Article } = require('./article/resolvers');

module.exports = {
  Query: {
    article,
  },
  Article,
};

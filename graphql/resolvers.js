const articleResolvers = require('./article/resolvers');
const authorResolvers = require('./author/resolvers');

module.exports = {
  Query: {
    ...articleResolvers,
    ...authorResolvers,
  }
};

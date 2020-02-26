const Article = require('./article/schema');
const Author = require('./author/schema');

module.exports = `
  type Query {
    article(id: ID!): Article
  }

  ${Article}
  ${Author}
`;

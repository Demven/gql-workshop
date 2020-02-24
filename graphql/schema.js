const { buildSchema } = require('graphql');
// const Article = require('./article/schema');

module.exports = buildSchema(`
  type Query {
    article(id: ID!): Article
  }

  type Article {
    id: ID!
    slug: String
    headline: String
    authors: [Author]
  }
  
  type Author {
    id: ID!
    name: String
    email: String
  }
`);

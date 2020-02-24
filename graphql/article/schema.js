module.exports = `
  extend type Query {
    article(id: ID!): Article
  }

  type Article {
    id: ID!
    slug: String
    headline: String
  }
`;

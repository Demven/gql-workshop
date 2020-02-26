module.exports = `
  type Article {
    id: ID!
    slug: String
    headline: String
    authors: [Author]
  }
`;

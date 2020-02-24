const express = require('express');
const graphql = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
app.use('/graphiql', graphql({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
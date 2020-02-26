const express = require('express');
const graphql = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
app.use('/graphiql', graphql({
  schema: executableSchema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./schema/schema');


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
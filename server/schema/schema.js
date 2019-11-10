const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./root-query-type');
const mutation = require('./mutation');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutation
});


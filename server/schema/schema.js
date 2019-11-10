const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./root-query-type');

module.exports = new GraphQLSchema({
  query: RootQueryType
});


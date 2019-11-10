const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID , GraphQLNonNull} = graphql;
const CourseType = require('./courseType');
const axios = require('axios');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCourse: {
      type: CourseType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { title }) {
        return axios.post("http://localhost:3000/courses", {title}).then(res => res.data);;
      }
    }
  }
});

module.exports = mutation;

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const CourseType = require('./courseType');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCourse: {
      type: CourseType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return { "id": 1, "title": "Course 1", "instructorId": 1, "studentIds" : [2,3,4] }
      }
    }
  }
});

module.exports = mutation;

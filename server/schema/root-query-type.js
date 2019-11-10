const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;
const CourseType = require('./courseType');
//const EmployeeType = require('./employeeType');

const axios = require('axios');



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    courses: {
      type: new GraphQLList(CourseType),
      resolve() {
        return axios.get("http://localhost:3000/courses").then(res => res.data);
      }
    },
    // course: {
    //     type: CourseType,
    //     args: { id: { type: GraphQLString } },
    //     resolve(parentValue, args) {
    //       return axios.get(`http://localhost:3000/courses/${args.id}`).then(res => res.data);
    //     }
    //   },
    // employee: {
    //     type: EmployeeType,
    //     args: { id: { type: GraphQLString } },
    //     resolve(parentValue, args) {
    //     return axios.get(`http://localhost:3000/employees/${args.id}`).then(res => res.data);
    //     }
    // }
  })
});

module.exports = RootQuery;

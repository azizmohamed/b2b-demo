const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;
//const CourseType = require('./courseType');
//const EmployeeType = require('./employeeType');

const axios = require('axios');

const CourseType = new GraphQLObjectType({
    name:  'CourseType',
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString } ,
    //   instructor: {
    //       type: EmployeeType,
    //       resolve(parentValue, args) {
    //         return axios.get(`http://localhost:3000/employees/${parentValue.instructorId}`)
    //           .then(res => res.data)
    //       }
    //   }
    //   ,
    //   students: {
    //       type: new GraphQLList(EmployeeType),
    //       resolve(parentValue, args) {
    //           return _.map(parentValue.studentIds, sId => {
    //               return axios.get(`http://localhost:3000/employees/${sId}`)
    //                   .then(res => res.data)
    //           });
              
    //         }
    //   }   
    })
  });

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    courses: {
      type: new GraphQLList(CourseType),
      resolve() {
        return [
            { "id": 1, "title": "Course 1", "instructorId": 1, "studentIds" : [2,3,4] },
            { "id": 2, "title": "Course 1", "instructorId": 2, "studentIds" : [1,3,4] },
            { "id": 3, "title": "Course 1", "instructorId": 3, "studentIds" : [2,1,4] },
            { "id": 4, "title": "Course 1", "instructorId": 4, "studentIds" : [2,3,1] }
          ];//axios.get("http://localhost:3000/courses").then(res => res.data);
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

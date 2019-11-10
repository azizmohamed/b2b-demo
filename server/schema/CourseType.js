const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

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


  module.exports = CourseType;
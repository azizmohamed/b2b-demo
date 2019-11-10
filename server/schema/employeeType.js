const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const _ = require('lodash');
const axios = require('axios');

const EmployeeType = new GraphQLObjectType({
  name:  'EmployeeType',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString } ,
    instructorIn : {
      type: new GraphQLList(require('./courseType')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/courses`)
        .then(res => {
            return _.filter(res.data, course => {
              return course.instructorId === parentValue.id
            });
          })
        }
    }    
  })
});

module.exports = EmployeeType;

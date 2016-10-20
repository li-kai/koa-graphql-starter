import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql';

let count = 0;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Counter',
    fields: {
      count: {
        type: GraphQLInt,
        resolve() {
          count += 1;
          return count;
        },
      },
    },
  }),
});

export default schema;

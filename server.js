import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import graphqlHTTP from 'express-graphql';

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

app.use(bodyParser.json());

app.all('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000);

import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

app.use(bodyParser.json());

app.all('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000);

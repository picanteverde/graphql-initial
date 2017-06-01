import merge from 'lodash/merge';
import { makeExecutableSchema } from 'graphql-tools';

import {
  schema as querySchema,
  resolver as queryResolver,
} from './queries';

const rootSchema = [`
  schema {
    query: Query
    #mutation
  }
`];

const typeDefs = [...rootSchema, ...querySchema];
const resolvers = merge(queryResolver);
export default makeExecutableSchema({
  typeDefs,
  resolvers,
});

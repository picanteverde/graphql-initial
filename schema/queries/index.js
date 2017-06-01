import merge from 'lodash/merge';

import {
  resolver as newsResolver,
  schema as newsSchema,
  def as newsDef,
} from './news';

import {
  resolver as usersResolver,
  schema as usersSchema,
  def as usersDef,
} from './users';

export const schema = [`
  # the schema allows the following query:
  type Query {
      ${newsDef}
      ${usersDef}
  }
`,
  ...newsSchema,
  ...usersSchema,
];

export const resolver = merge(
  newsResolver,
  usersResolver,
);

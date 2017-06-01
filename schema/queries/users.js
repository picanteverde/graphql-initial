import merge from 'lodash/merge';
import User, { resolver as userResolver } from '../types/User';

const usersTableMySQL = [
  {
    name: 'alejandro',
  },
  {
    name: 'johns',
  },
  {
    name: 'early',
  },
];

export const def = `
  #get all users
  users: [User]

  #search users
  usersSearch(
    #Patter to search
    pattern: String
  ): [User]
`;

export const resolver = merge(userResolver, {
  Query: {
    users() {
      return usersTableMySQL;
    },

    usersSearch(root, { pattern }) {
      return usersTableMySQL.filter(u => (u.name.indexOf(pattern) !== -1));
    },
  },
});

export const schema = [...User];

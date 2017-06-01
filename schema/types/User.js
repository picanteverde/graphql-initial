import HNNews from './HNNews';
import users from '../../data/users';

const User = `
  type User {
    name: String
    news: [HNNews]
    age: Int
  }
`;

export default [
  User,
  ...HNNews,
];

export const resolver = {
  User: {

    news(obj) {
      return users.getNews(obj.name);
    },

    age(obj) {
      return users.getAge(obj.name);
    },
  },
};

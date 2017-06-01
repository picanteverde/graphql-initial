import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';


const typeDefs = `

type HNNews {
  title: String
  url: String
}

# the schema allows the following query:
type Query {
  #Query to se my name
  myName: String

  #Get the Hacker news news
  hackerNews: [HNNews]

  #search hacker news
  name( name: String): [HNNews]
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  #mutation: Mutation
}
`;

const resolvers = {
  Query: {

    myName() {
      return 'Alejandro';
    },

    hackerNews() {
      return fetch('https://node-hnapi.herokuapp.com/news')
        .then(res => res.json())
        .then(res => res.map(n => ({
          title: n.title,
          url: n.url,
        })));
    },

    name(root, { name }) {
      return fetch(`https://hn.algolia.com/api/v1/search?query=${name}`)
        .then(res => res.json())
        .then(res => res.hits.map(n => ({
          title: n.title,
          url: n.url,
        })));
    },
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});

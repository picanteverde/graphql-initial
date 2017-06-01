import fetch from 'node-fetch';
import HNNews from '../types/HNNews';

export const def = `
  #Query to se my name
  myName: String

  #Get the Hacker news news
  hackerNews: [HNNews]

  #search hacker news
  name( name: String): [HNNews]
`;

export const resolver = {
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

export const schema = [...HNNews];

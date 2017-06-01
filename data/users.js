import fetch from 'node-fetch';

const usersPropertiesMongo = {
  alejandro: {
    age: 34,
  },
  johns: {
    age: 26,
  },
  early: {
    age: 25,
  },
};


export default {
  getNews(name) {
    return fetch(`https://hn.algolia.com/api/v1/search?query=${name}`)
      .then(res => res.json())
      .then(res => res.hits.map(n => ({
        title: n.title,
        url: n.url,
      })));
  },

  getAge(name) {
    return usersPropertiesMongo[name].age;
  },

};

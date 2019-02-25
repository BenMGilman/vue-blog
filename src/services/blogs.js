import fetch from 'isomorphic-fetch';

const api = 'https://www.credera.com/api/insights/?page=0&resultsPerPage=250';

export function query(sort, category = 'news') { // eslint-disable-line
  return fetch(`${api}&categoryName=${category}` + (sort ? `&sortField=${sort}` : ''), { // eslint-disable-line
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(resp => resp.json()).then(resp => resp.posts);
}

const URL = 'https://newsapi.org/v2';
const API_KEY = '1968688066da4d8faab8feaf8c6d6f20';

const getSources = async () => {
  const response = await fetch(`${URL}/sources?apiKey=${API_KEY}`);
  return await response.json();
};

const getArticle = async (category, pageSize = 10) => {
  const url = `${URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

const customQuery = async (_source, pageSize = 10) => {
  const params = [];
  //  API not working if set sources + pageSize :(
  params.push(!(+_source === 0) ? 'sources=' + _source : 'category=general');
  params.push('pageSize=' + pageSize);
  const url = `${URL}/top-headlines?${params.join('&')}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

export { getArticle, getSources, customQuery };

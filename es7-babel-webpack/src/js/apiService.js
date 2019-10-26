const URL = 'https://newsapi.org/v2';
const API_KEY = '1968688066da4d8faab8feaf8c6d6f20';

async function getSources() {
    return fetch(`${URL}/sources?apiKey=${API_KEY}`);
}

async function requestArticle(number, category) {
    return fetch(`${URL}/top-headlines?category=${category}&pageSize=${number}&apiKey=${API_KEY}`);
}

export {requestArticle, getSources}

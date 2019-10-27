const URL = 'https://newsapi.org/v2';
const API_KEY = '1968688066da4d8faab8feaf8c6d6f20';

async function getSources() {
    const response = await fetch(`${URL}/sources?apiKey=${API_KEY}`);
    return await response.json();
}

async function getArticle(count, category) {
    const response = await fetch(`${URL}/top-headlines?category=${category}&pageSize=${count}&apiKey=${API_KEY}`);
    return await response.json();
}

export {getArticle, getSources}

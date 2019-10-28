const URL = 'https://newsapi.org/v2';
const API_KEY = '1968688066da4d8faab8feaf8c6d6f20';

async function getSources() {
    const response = await fetch(`${URL}/sources?apiKey=${API_KEY}`);
    return await response.json();
}

async function getArticle(category, pageSize = 10) {
    const response = await fetch(`${URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`);
    return await response.json();
}

async function customQuery(_source, pageSize = 10){
    const params = [];
    //  API not working if set sources + pageSize :(
    !(+_source === 0) ? params.push('sources=' + _source) : params.push('category=general');
    params.push('pageSize='+pageSize);
    const url = `${URL}/top-headlines?${params.join('&')}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    return await response.json();
}

export {getArticle, getSources, customQuery}

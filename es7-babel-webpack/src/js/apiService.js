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

async function customQuery(_country, _source, type, pageSize = 10){
    const params = ['pageSize='+pageSize];
    !(+_country === 0) ? params.push('country=' + _country) : '';
    !(+_source === 0) ? params.push('domains=' + _source) : '';
    const url = `${URL}/${type}?${params.join('&')}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    return await response.json();
}

export {getArticle, getSources, customQuery}

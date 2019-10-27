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

async function customQuery(_country, _source, _language, _text){
    const params = [];
    !(+_country === 0) ? params.push('country=' + _country) : '';
    !(+_source === 0) ? params.push('domains=' + _source) : '';
    !(+_language === 0) ? params.push('language=' + _language) : '';
    _text ? params.push('&q=' + _text) : '';
    return `${URL}/everything?${params.join('&')}&pageSize=10&apiKey=${API_KEY}`;
}

export {getArticle, getSources, customQuery}

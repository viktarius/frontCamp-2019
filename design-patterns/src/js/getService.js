export class GetService {
    async getSources() {
        const response = await fetch(`${URL}/sources?apiKey=${API_KEY}`);
        return await response.json();
    };

    async getArticle(category, pageSize = 10) {
        const url = `${URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`;
        const response = await fetch(url);
        return await response.json();
    };

    async customQuery(_source, pageSize = 10) {
        const params = [];
        params.push(!(+_source === 0) ? 'sources=' + _source : 'category=general');
        params.push('pageSize=' + pageSize);
        const url = `${URL}/top-headlines?${params.join('&')}&apiKey=${API_KEY}`;
        const response = await fetch(url);
        return await response.json();
    };
}

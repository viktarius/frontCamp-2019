export default class GetService{
    async getSources() {
        const response = await fetch(`${this.URL}/sources?apiKey=${this.API_KEY}`);
        return await response.json();
    };

    async getArticle(category, pageSize = 10) {
        const url = `${this.URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
        const response = await fetch(url);
        return await response.json();
    };

    async customQuery(_source, pageSize = 10) {
        const params = [];
        params.push(!(+_source === 0) ? 'sources=' + _source : 'category=general');
        params.push('pageSize=' + pageSize);
        const url = `${this.URL}/top-headlines?${params.join('&')}&apiKey=${this.API_KEY}`;
        const response = await fetch(url);
        return await response.json();
    };
}

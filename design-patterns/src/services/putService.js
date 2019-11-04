export default class PutService {
    async deleteSomething() {
        const url = `${this.URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
        const response = await fetch(url, {
            method: 'put'
        });
        return await response.json();
    }
}

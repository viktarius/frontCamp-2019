export default class DeleteService {
    async deleteSomething() {
        const url = `${this.URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
        const response = await fetch(url, {
            method: 'delete'
        });
        return await response.json();
    }
}

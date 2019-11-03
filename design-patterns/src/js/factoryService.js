const URL = 'https://newsapi.org/v2';
const API_KEY = '1968688066da4d8faab8feaf8c6d6f20';

class factoryService {
    create(type) {
        let service;
        switch (type) {
            case 'get':
                service = new GetService();
                break;
            case 'post':
                break;
            case 'delete':
                break;
            case 'put':
                break;
            default:
                throw new Error('unknown method');
                break;
        }
      service.type = type;
        return service;
    }
}

class GetService {
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

const factoryApi = new factoryService();

export {factoryApi};

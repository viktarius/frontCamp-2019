// const URL = 'https://newsapi.org/v2';
// const API_KEY = '1968688066da4d8faab8feaf8c6d6f20';
import GetService from './getService';

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
        service.URL = 'https://newsapi.org/v2';
        service.API_KEY = '1968688066da4d8faab8feaf8c6d6f20';
        return service;
    }
}

const factoryApi = new factoryService();

export {factoryApi};

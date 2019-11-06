import GetService from './getService';
import PostService from './postService';
import PutService from './putService';
import DeleteService from './deleteService';

// Pattern Factory
class FactoryService {
  constructor(type) {
    let service;
    switch (type) {
      case 'get':
        service = new GetService();
        break;
      case 'post':
        service = new PostService();
        break;
      case 'delete':
        service = new DeleteService();
        break;
      case 'put':
        service = new PutService();
        break;
      default:
        throw new Error('unknown method');
    }
    service.type = type;
    service.URL = 'https://newsapi.org/v2';
    service.API_KEY = '1968688066da4d8faab8feaf8c6d6f20';
    return service;
  }
}

// Proxy
export default new Proxy(FactoryService, {
  construct(target, argArray, newTarget) {
    return new Proxy(new target(...argArray), {
      set(t, p, receiver) {
        return false;
      },
      has(target, p) {
        return !(p === 'API_KEY');
      },
      deleteProperty(target, p) {
        return false;
      }
    });
  }
});

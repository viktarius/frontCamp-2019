import FactoryServiceProxy from '../../services/factoryService';

export default class MainController {
  constructor(model, view) {
    this.getService = new FactoryServiceProxy('get');
    this._form = document.getElementById('customQuery');
    this._model = model;
    this._view = view;

    view.on('categoryChange', event => this.categoryChange(event));
  }

  categoryChange(event) {
    event.preventDefault();
    const category =
      event.target.innerHTML === 'home' ? 'general' : event.target.innerHTML;
    this._model.category = category;
    this.loadArticle();
  }

  loadArticle() {
    this.getService.getArticle(this._model.category).then(({ articles }) => {
      this._model.articles = articles;
    });
  }

  loadSource() {}

  load() {
    this.loadArticle();
    this.loadSource();
  }
}

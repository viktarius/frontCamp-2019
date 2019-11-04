import FactoryServiceProxy from '../services/factoryService';

const errorHandler = (message, title) => {
  import('../_helpers/errorHandler')
    .then(errorModule => errorModule.default)
    .then(handler => handler.showError(message, title));
};

export default class MainController {
  constructor(model, view) {
    this.getService = new FactoryServiceProxy('get');
    this._form = document.getElementById('customQuery');
    this._model = model;
    this._view = view;

    view.on('categoryChange', event => this.categoryChange(event));
    view.on('customQueryFormChange', event => this.customQueryChange(event));
    view.on('articleSelect', event => this.changeMainArticle(event));
    setTimeout(() => this.onlyForTestErrorHandler(), 5000);
  }

  onlyForTestErrorHandler() {
    try {
      delete this.getService.API_KEY;
    } catch (e) {
      errorHandler(e.message, 'test message');
    }
  }

  categoryChange(event) {
    event.preventDefault();
    const category =
      event.target.innerHTML === 'home' ? 'general' : event.target.innerHTML;
    this._model.articlesModel.category = category;
    this.loadArticle();
  }

  customQueryChange(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.getService
      .customQuery(
        formData.get('resourceSelect'),
        formData.get('pageCountSelect')
      )
      .then(({ articles }) => {
        this._model.articlesModel.articles = articles;
      });
  }

  changeMainArticle({ target }) {
    if (target.closest('.article')) {
      const article = target.closest('.article');
      const articleId = article.dataset.articleid;
      this._model.articlesModel.article = articleId;
    }
  }

  loadArticle() {
    this.getService
      .getArticle(this._model.articlesModel.category)
      .then(({ articles }) => {
        this._model.articlesModel.articles = articles;
      });
  }

  loadSource() {
    this.getService
      .getSources()
      .then(({ sources }) => (this._model.sourcesModel.sources = sources))
      .catch(error => errorHandler(error.message));
  }

  load() {
    this.loadArticle();
    this.loadSource();
  }
}

import EventEmitter from '../_helpers/EventEmitter';

const getArticlesLayout = ({ urlToImage }, index) => {
  return `<div class="article" data-articleId="${index}">
            <img src="${urlToImage}" alt="">
        </div>`;
};

const getArticleLayout = ({ title, content, urlToImage, url, author }) => {
  return `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="banner">
            <img src="${urlToImage}" alt="">
        </div>
        <div class="info">
            <p> read more: <a href="${url}" target="_blank">source</a></p>
            <p>${author}</p>
        </div>`;
};

export default class ArticlesView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._articlesPlace = document.getElementById('articles');
    this._articlePlace = document.getElementById('article');
    this._model = model;
    this._elements = elements;

    elements.linkList.addEventListener('click', e =>
      this.emit('categoryChange', e)
    );
    elements.customQueryForm.addEventListener('submit', e =>
      this.emit('customQueryFormChange', e)
    );
    elements.articlesList.addEventListener('click', e =>
      this.emit('articleSelect', e)
    );

    model.sourcesModel.on('sourcesChange', () => this.renderSources());
    model.articlesModel.on('articlesChange', () => this.renderArticles());
    model.articlesModel.on('articleChange', () => this.renderArticle());
  }

  renderArticles() {
    if (!this._model.articlesModel.articles.length) {
      this._articlesPlace.innerHTML = 'Не удалось получить статьи';
    }
    this._articlesPlace.innerHTML = this._model.articlesModel.articles
      .map((article, index) => getArticlesLayout(article, index))
      .join('');
  }

  renderSources() {
    const select = document.getElementById('resourceSelect');
    this._model.sourcesModel.sources.forEach(source => {
      const option = document.createElement('option');
      option.source = source;
      option.text = source;
      select.add(option);
    });
    document
      .getElementById('customQuery')
      .querySelector('button').disabled = false;
  }

  renderArticle() {
    this._articlePlace.innerHTML = getArticleLayout(
      this._model.articlesModel.article
    );
  }
}

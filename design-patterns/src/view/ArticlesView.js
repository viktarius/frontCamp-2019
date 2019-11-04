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

    model.on('articlesChange', () => this.renderArticles());
  }

  renderArticles() {
    if (!this._model.articles.length) {
      this._articlesPlace.innerHTML = 'Не удалось получить статьи';
    }
    this._articlesPlace.innerHTML = this._model.articles
      .map((article, index) => getArticlesLayout(article, index))
      .join('');
  }

  renderArticle(article) {
    articlePlace.innerHTML = getArticleLayout(article);
  }
}

import EventEmitter from '../_helpers/EventEmitter';

export default class ArticlesModel extends EventEmitter {
  constructor(articles) {
    super();
    this._articles = articles || [];
    this._category = 'general';
  }

  get articles() {
    return this._articles;
  }

  set articles(articles) {
    this._articles = articles;
    this.emit('articlesChange', articles);
  }

  get category() {
    return this._category;
  }

  set category(category) {
    this._category = category;
  }

  getSpecificArticle(id) {
    return this._articles[id];
  }
}

import EventEmitter from '../_helpers/EventEmitter';

export default class ArticlesModel extends EventEmitter {
  constructor(articles) {
    super();
    this._articles = articles || [];
    this._category = 'general';
    this._article = null;
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

  get article() {
    return this._article;
  }

  set article(id) {
    this._article = this._articles[id];
    this.emit('articleChange', this._articles[id]);
  }
}

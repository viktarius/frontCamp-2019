class ArticlesModel {
    constructor(articles) {
        this._articles = articles || [];
    }

    get articles() {
        return this._articles;
    }

    set articles(articles) {
        this._articles = articles;
    }

    getSpecificArticle(id) {
        return this._articles[id];
    }

}

export default new ArticlesModel();

const getArticlesLayout = ({urlToImage}, index) => {
    return `<div class="article" data-articleId="${index}">
            <img src="${urlToImage}" alt="">
        </div>`;
};

class ArticlesView {
    constructor() {
        this._articlesPlace = document.getElementById('articles');
        this._articlePlace = document.getElementById('article');
    }

    renderArticles(articles) {
        if (!articles.length) {
            this._articlesPlace.innerHTML = 'Не удалось получить статьи';
        }
        this._articlesPlace.innerHTML = articles
            .map((article, index) => getArticlesLayout(article, index))
            .join('');
    }


    renderArticle() {

    }
}

export default new ArticlesView();

const root = document.getElementById('articles');
let articles;

const renderNew = (article, index) => {
    return `<div class="article" data-articleId="${index}">
        <img src="${article.urlToImage}" alt="">
    </div>`
};

const renderSource = (sources) => {
    // console.table(sources)
};

const renderNews = (_articles) => {
    articles = _articles;
    root.innerHTML = _articles.map((article, index) => renderNew(article, index)).join('');
};

const renderArticle = article => {
    console.log(article)
};

root.addEventListener('click', function (event) {
    if(event.target.closest('.article')){
        const article = event.target.closest('.article');
        const articleId = article.dataset.articleid;
        renderArticle(articles[articleId]);
    }
});



export {renderNews, renderSource}
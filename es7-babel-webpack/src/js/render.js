const articlesPlace = document.getElementById('articles');
const articlePlace = document.getElementById('article');

const getNewLayout = (article, index) => {
    return `<div class="article" data-articleId="${index}">
        <img src="${article.urlToImage}" alt="">
    </div>`
};

const getArticleLayout = article => {
    return `
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <div class="banner">
            <img src="${article.urlToImage}" alt="">
        </div>
        <div class="info">
            <p> read more: <a href="${article.url}" target="_blank">source</a></p>
            <p>${article.author}</p>
        </div>`
};

const appendOption = (target, set) => {
    const select = document.getElementById(target);
    set.forEach( value => {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        select.add(option);
    })
    // document.createElement()
};

const renderSource = (sources) => {
    console.table(sources);
    const resourceSet = new Set();
    for (const source of sources) {
        resourceSet.add(source.id);
    }
    appendOption('resourceSelect', resourceSet);
};

const renderNews = (_articles) => {
    articlesPlace.innerHTML = _articles.map((article, index) => getNewLayout(article, index)).join('');
};

const renderArticle = article => {
    console.log(article);
    articlePlace.innerHTML = getArticleLayout(article);
};

export {renderNews, renderSource, renderArticle}
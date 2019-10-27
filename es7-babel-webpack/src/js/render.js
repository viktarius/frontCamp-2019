const root = document.getElementById('root');
const renderNew = article => {
    return `<div>
        <img src="${article.urlToImage}" alt="">
    </div>`
};

const renderSource = (sources) => {
    // console.table(sources)
};

const renderNews = (articles) => {
    // console.table(articles)
    // console.log(articles[0])
    root.innerHTML = articles.map(article => renderNew(article))
};


export {renderNews, renderSource}
import {getSources, getArticle, customQuery} from './js/apiService';
import {renderSource, renderNews, renderArticle} from "./js/render";

let loadedArticles;

document.querySelector("#link-list").addEventListener('click', function (event) {
    event.preventDefault();
    const category = event.target.innerHTML === 'home' ? 'general' : event.target.innerHTML;
    loadArticles(10, category);
});

document.querySelector('#articles').addEventListener('click', function (event) {
    if (event.target.closest('.article')) {
        const article = event.target.closest('.article');
        const articleId = article.dataset.articleid;
        renderArticle(loadedArticles[articleId]);
    }
});

document.querySelector('#customQuery').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    customQuery(formData.get('countrySelect'), formData.get('resourceSelect'), formData.get('languageSelect'))
        .then(url => console.log(url));
});

const loadArticles = (count, category) => {
    getArticle(count, category)
        .then(({articles}) => {
            renderNews(articles);
            loadedArticles = articles;
        })
        .catch(error => console.error(error));
};

const loadSources = () => {
    getSources()
        .then(({sources}) => renderSource(sources))
        .catch(error => console.error(error))
};

loadArticles(10, 'general');
loadSources();
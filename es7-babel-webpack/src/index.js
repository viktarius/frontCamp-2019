import {getSources, getArticle, customQuery} from './js/apiService';
import {renderSource, renderNews, renderArticle} from "./js/render";


const form = document.getElementById('customQuery');
let loadedArticles;

document.querySelector("#link-list").addEventListener('click', function (event) {
    event.preventDefault();
    const category = event.target.innerHTML === 'home' ? 'general' : event.target.innerHTML;
    loadArticles(category);
});

document.querySelector('#articles').addEventListener('click', function (event) {
    if (event.target.closest('.article')) {
        const article = event.target.closest('.article');
        const articleId = article.dataset.articleid;
        renderArticle(loadedArticles[articleId]);
    }
});

const createCustomQuery = (event) => {
    const formData = new FormData(document.querySelector('#customQuery'));
    const type = (event.target.id === 'loadTopArticle') ? 'top-headlines' : 'everything';
    customQuery(formData.get('countrySelect'), formData.get('resourceSelect'),type, formData.get('pageCountSelect'))
    .then(({articles}) => {
        renderNews(articles);
        loadedArticles = articles || [];
    })
    .catch(error => console.error(error));    
};

const enableButton = () => {
    form.querySelector('button').disabled = false;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    customQuery(formData.get('resourceSelect'), formData.get('pageCountSelect'))
    .then(({articles}) => {
        renderNews(articles);
        loadedArticles = articles || [];
    })
})

const loadArticles = (category) => {
    getArticle(category)
        .then(({articles}) => {
            renderNews(articles);
            loadedArticles = articles || [];
        })
        .catch(error => console.error(error));
};

const loadSources = () => {
    getSources()
        .then(({sources}) => renderSource(sources))
        .then( () => enableButton(form))
        .catch(error => console.error(error))
};

loadArticles('general');
loadSources();

import FactoryServiceProxy from './js/services/factoryService';
import {renderSource, renderNews, renderArticle} from './js/render';
import articlesModel from '../model/ArtcilesModel';
import articlesView from '../view/ArticlesView';

const getService = new FactoryServiceProxy('get');
const form = document.getElementById('customQuery');
let loadedArticles;

const errorHandler = (message) => {
    import('./js/errorHandler')
        .then(errorModule => errorModule.default)
        .then(handler => handler.showError(message));
};

// only for show case
setTimeout(() => {
    try {
        delete getService.API_KEY;
    } catch (e) {
        errorHandler(e.message);
    }
}, 5000);

const handleHeaderClick = event => {
    event.preventDefault();
    const category =
        event.target.innerHTML === 'home' ? 'general' : event.target.innerHTML;
    loadArticles(category);
};

document
    .querySelector('#link-list')
    .addEventListener('click', handleHeaderClick);

const handleArticlesClick = ({target}) => {
    if (target.closest('.article')) {
        const article = target.closest('.article');
        const articleId = article.dataset.articleid;
        renderArticle(articlesModel.getSpecificArticle(articleId));
    }
};

document
    .querySelector('#articles')
    .addEventListener('click', handleArticlesClick);

const enableButton = () => {
    form.querySelector('button').disabled = false;
};

const handleSubmitForm = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    getService.customQuery(
        formData.get('resourceSelect'),
        formData.get('pageCountSelect')
    ).then(({articles}) => {
        articlesView.renderArticles(articles);
        // renderNews(articles);
        articlesModel.articles = articles;
        loadedArticles = articles || [];
    });
};

form.addEventListener('submit', handleSubmitForm);

const loadArticles = category => {
    getService.getArticle(category)
        .then(({articles}) => {
            articlesView.renderArticles(articles);
            // renderNews(articles);
            articlesModel.articles = articles;
            loadedArticles = articles || [];
        })
        .catch(error => errorHandler(error.message));
};

const loadSources = () => {
    getService.getSources()
        .then(({sources}) => renderSource(sources))
        .then(() => enableButton(form))
        .catch(error => errorHandler(error.message));
};

loadArticles('general');
loadSources();

import { factoryApi } from './js/services/factoryService';
import { renderSource, renderNews, renderArticle } from './js/render';
import errorSingleton from './js/errorHandler';

const getService = factoryApi.create('get');
console.log(getService);
console.log(factoryApi);
const form = document.getElementById('customQuery');
let loadedArticles;

const handleHeaderClick = event => {
  event.preventDefault();
  const category =
    event.target.innerHTML === 'home' ? 'general' : event.target.innerHTML;
  loadArticles(category);
};

document
  .querySelector('#link-list')
  .addEventListener('click', handleHeaderClick);

const handleArticlesClick = ({ target }) => {
  if (target.closest('.article')) {
    const article = target.closest('.article');
    const articleId = article.dataset.articleid;
    renderArticle(loadedArticles[articleId]);
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
  ).then(({ articles }) => {
    renderNews(articles);
    loadedArticles = articles || [];
  });
};

form.addEventListener('submit', handleSubmitForm);

const loadArticles = category => {
  getService.getArticle(category)
    .then(({ articles }) => {
      renderNews(articles);
      loadedArticles = articles || [];
    })
    .catch(error => console.error(error));
};

const loadSources = () => {
  getService.getSources()
    .then(({ sources }) => renderSource(sources))
    .then(() => enableButton(form))
    .catch(error => console.error(error));
};

// console.log(errorSingleton);
errorSingleton.showError('errorTEXT');

setTimeout(()=>{
  errorSingleton.showError('errorTEXT213123123');
},5000);

loadArticles('general');
loadSources();

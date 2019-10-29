import { getSources, getArticle, customQuery } from './js/apiService';
import { renderSource, renderNews, renderArticle } from './js/render';

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

const handleArticlesClick = event => {
  if (event.target.closest('.article')) {
    const article = event.target.closest('.article');
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
  customQuery(
    formData.get('resourceSelect'),
    formData.get('pageCountSelect')
  ).then(({ articles }) => {
    renderNews(articles);
    loadedArticles = articles || [];
  });
};

form.addEventListener('submit', handleSubmitForm);

const loadArticles = category => {
  getArticle(category)
    .then(({ articles }) => {
      renderNews(articles);
      loadedArticles = articles || [];
    })
    .catch(error => console.error(error));
};

const loadSources = () => {
  getSources()
    .then(({ sources }) => renderSource(sources))
    .then(() => enableButton(form))
    .catch(error => console.error(error));
};

loadArticles('general');
loadSources();

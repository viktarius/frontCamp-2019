import {getSources, getArticle} from './js/apiService';
import {renderSource, renderNews} from "./js/render";

document.querySelector("#link-list").addEventListener("click", function (event) {
    event.preventDefault();
    const category = event.target.innerHTML === "home" ? 'general' : event.target.innerHTML;
    loadArticles(10, category);
});

const loadArticles = (count, category) => {
    getArticle(count, category)
        .then(({articles}) => renderNews(articles))
        .catch(error => console.error(error));
};

const loadSources = () => {
    getSources()
        .then(({sources}) => renderSource(sources))
        .catch(error => console.error(error))
};

loadArticles(10, 'general');
loadSources();
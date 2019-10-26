import {getSources, requestArticle} from './js/apiService';
import {renderSource, renderNews} from "./js/render";

document.querySelector("#link-list").addEventListener("click", function (event) {
    event.preventDefault();
    // if (event.target.classList.contains('link')) {
        const category = event.target.innerHTML === "home" ? 'general' : event.target.innerHTML;
    //     console.log(url);
    //     window.history.pushState(url, url, `/${url}`);
    // }
    getArticles(10, category)
        .then(articles => renderNews(articles))
});

// console.log(location.search);

const getAllSources = async () => {
    const response = await getSources();
    const data = await response.json();
    return data;
};

const getArticles = async (number, category) => {
    const response = await requestArticle(number, category);
    return await response.json();
};

getAllSources()
    .then(sources => renderSource(sources));

getArticles(10, 'general')
    .then(topHeadline => renderNews(topHeadline));
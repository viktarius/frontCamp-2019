const articlesPlace = document.getElementById('articles');
const articlePlace = document.getElementById('article');

const getNewLayout = ({ urlToImage }, index) => {
  return `<div class="article" data-articleId="${index}">
        <img src="${urlToImage}" alt="">
    </div>`;
};

const getArticleLayout = ({ title, content, urlToImage, url, author }) => {
  return `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="banner">
            <img src="${urlToImage}" alt="">
        </div>
        <div class="info">
            <p> read more: <a href="${url}" target="_blank">source</a></p>
            <p>${author}</p>
        </div>`;
};

const appendOption = (target, set) => {
  const select = document.getElementById(target);
  set.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.text = value;
    select.add(option);
  });
};

const renderSource = sources => {
  const resourceSet = new Set();
  for (const source of sources) {
    resourceSet.add(source.id);
  }
  appendOption('resourceSelect', resourceSet);
};

const renderNews = articles => {
  if (!articles.lenght) {
    articlesPlace.innerHTML = 'Не удалось получить статьи';
  }
  articlesPlace.innerHTML = articles
    .map((article, index) => getNewLayout(article, index))
    .join('');
};

const renderArticle = article => {
  articlePlace.innerHTML = getArticleLayout(article);
};

export { renderNews, renderSource, renderArticle };

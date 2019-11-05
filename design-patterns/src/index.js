import ArticlesModel from './model/ArtcilesModel';
import SourcesModel from './model/SourcesModel';
import MainView from './view/MainView';
import MainController from './controller/MainController';

const elements = {
  linkList: document.getElementById('link-list'),
  customQueryForm: document.getElementById('customQuery'),
  articlesList: document.getElementById('articles')
};

const models = {
  articlesModel: new ArticlesModel(),
  sourcesModel: new SourcesModel()
};

// MVC
window.addEventListener('load', () => {
  const mainView = new MainView(models, elements);
  const controller = new MainController(models, mainView);

  controller.load();
});

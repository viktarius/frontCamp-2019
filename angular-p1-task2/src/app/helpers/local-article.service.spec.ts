import { LocalArticleService } from "./local-article.service";

describe('LocalArticleService', () => {
  let localArticleService: LocalArticleService;
  beforeEach(() => {
    localArticleService = new LocalArticleService();
  });

  it('should push new article to articles', () => {
    const article = {id: 1, title: 'test'};

    localArticleService.addArticle(article);

    expect(localArticleService.articles).toEqual(jasmine.arrayContaining([article]));
  });

  it('should update article by id',  () => {
    const newArticle = {id: 1, title: 'new article'};

    localArticleService.updateArticle(newArticle, 1);

    expect(localArticleService.articles).toEqual(jasmine.arrayContaining([newArticle]));
  });

  it('should delete article by id', () => {
    const article = localArticleService.articles.filter(art => art.id === 1);

    localArticleService.deleteArticle(1);

    expect(localArticleService.articles).not.toEqual(jasmine.arrayContaining(article))
  });
});

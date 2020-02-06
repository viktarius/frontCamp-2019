import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Home page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should title My articles', () => {
    expect(page.getTitleText()).toEqual('My articles');
  });

  it('should title My articles', () => {
    expect(page.getLogoText()).toEqual('Aggregator logo');
  });

  it('should load 5 articles', () => {
    expect(page.getArticles().count()).toBe(5);
  });

  it('should load 5 addition articles after click load more button', () => {
    page.getLoadMoreButton().click();

    expect(page.getArticles().count()).toBe(10);
  });

  it('should left only local articles after click on checkbox', () => {
    page.getArticleCheckbox().click();

    expect(page.getArticles().count()).toBe(3);
  });

  it('should first article Trippledex', () => {
    page.getArticleCheckbox().click();

    expect(page.getFirstArticleTitle().getText()).toEqual('Trippledex');
  });

  it('should be exists footer', () => {
    expect(page.getFooter()).toBeTruthy();
  });

  it('should open create page', () => {
    page.getAddButton().click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/create');
  });

  it('should open first article page', () => {
    page.getArticleCheckbox().click();
    page.getArticles().get(0).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/show/1');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

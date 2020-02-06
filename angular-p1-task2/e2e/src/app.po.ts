import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .source')).getText() as Promise<string>;
  }

  getLogoText() {
    return element(by.css('app-root .header .left-content p')).getText() as Promise<string>;
  }

  getArticleCheckbox(): ElementFinder {
    return element(by.css('app-root #only-mine'));
  }

  getArticles(): ElementArrayFinder {
    return element(by.css('app-root app-articles')).all(by.css('app-article'))
  }

  getFirstArticleTitle() {
    return element(by.css('app-root app-articles app-article .left h3'));
  }

  getFooter(): ElementFinder {
    return element(by.css('app-footer'));
  }

  getLoadMoreButton(): ElementFinder{
    return element(by.buttonText('Load More'));
  }

  getAddButton(): ElementFinder {
    return element(by.css('.setting-group--add'));
  }

}

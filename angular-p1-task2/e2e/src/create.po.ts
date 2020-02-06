import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class CreatePage {
  navigateTo() {
    return browser.get('/create') as Promise<any>;
  }

  getCancelButton() : ElementFinder{
    return element(by.buttonText('Cancel'));
  }

  getSaveButton() : ElementFinder{
    return element(by.buttonText('Save'));
  }

  getTitleInput() : ElementFinder{
    return element(by.css('#title'))
  }

  getDescriptionInput() : ElementFinder{
    return element(by.css('#short'))
  }

  getContentInput() : ElementFinder{
    return element(by.css('#content'))
  }
}

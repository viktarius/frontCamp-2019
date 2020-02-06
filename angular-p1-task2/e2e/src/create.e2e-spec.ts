import { browser, logging } from 'protractor';

import { CreatePage } from "./create.po";

describe('Home page', () => {
  let page: CreatePage;

  beforeEach(() => {
    page = new CreatePage();
    page.navigateTo();
  });

  it('should return to home page on cancel button', () => {
    page.getCancelButton().click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
  });

  it('should stay current url after click on save without data on form', () => {
    page.getSaveButton().click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/create');
  });

  it('should open home page after click on save with data on form', () => {
    page.getTitleInput().sendKeys('title');
    page.getDescriptionInput().sendKeys('description');
    page.getContentInput().sendKeys('content');
    page.getSaveButton().click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});

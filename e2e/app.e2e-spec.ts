import { TestAngularMocksPage } from './app.po';

describe('test-angular-mocks App', () => {
  let page: TestAngularMocksPage;

  beforeEach(() => {
    page = new TestAngularMocksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

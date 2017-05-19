import { ECEPage } from './app.po';

describe('ece App', function() {
  let page: ECEPage;

  beforeEach(() => {
    page = new ECEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

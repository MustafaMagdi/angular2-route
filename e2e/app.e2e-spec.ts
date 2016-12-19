import { Angular2RoutexPage } from './app.po';

describe('angular2-routex App', function() {
  let page: Angular2RoutexPage;

  beforeEach(() => {
    page = new Angular2RoutexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

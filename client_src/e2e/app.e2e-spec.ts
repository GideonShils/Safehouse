import { SafehouseFrontPage } from './app.po';

describe('safehouse-front App', () => {
  let page: SafehouseFrontPage;

  beforeEach(() => {
    page = new SafehouseFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { ManagerPage } from './app.po';

describe('manager App', () => {
  let page: ManagerPage;

  beforeEach(() => {
    page = new ManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

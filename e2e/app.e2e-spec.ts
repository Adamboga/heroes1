import { Heroes1Page } from './app.po';

describe('heroes1 App', () => {
  let page: Heroes1Page;

  beforeEach(() => {
    page = new Heroes1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

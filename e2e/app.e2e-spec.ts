import { CaptainsDraftPage } from './app.po';

describe('captains-draft App', () => {
  let page: CaptainsDraftPage;

  beforeEach(() => {
    page = new CaptainsDraftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

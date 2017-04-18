import { MySbAdminRtlPage } from './app.po';

describe('my-sb-admin-rtl App', () => {
  let page: MySbAdminRtlPage;

  beforeEach(() => {
    page = new MySbAdminRtlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

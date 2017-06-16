import { Ng2MaterialDemoPage } from './app.po';

describe('ng2-material-demo App', () => {
  let page: Ng2MaterialDemoPage;

  beforeEach(() => {
    page = new Ng2MaterialDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

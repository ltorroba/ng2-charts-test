import { Ng2ChartsTestPage } from './app.po';

describe('ng2-charts-test App', () => {
  let page: Ng2ChartsTestPage;

  beforeEach(() => {
    page = new Ng2ChartsTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

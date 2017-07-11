import { Angular4ProyectoPage } from './app.po';

describe('angular4-proyecto App', () => {
  let page: Angular4ProyectoPage;

  beforeEach(() => {
    page = new Angular4ProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

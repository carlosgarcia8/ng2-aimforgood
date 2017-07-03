import { AimforgoodPage } from './app.po';

describe('aimforgood App', () => {
  let page: AimforgoodPage;

  beforeEach(() => {
    page = new AimforgoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

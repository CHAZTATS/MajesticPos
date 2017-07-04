import { MajesticPosPage } from './app.po';

describe('majestic-pos App', () => {
  let page: MajesticPosPage;

  beforeEach(() => {
    page = new MajesticPosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
  });
});

import DrawerInit from '../utils/drawer-init';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    button,
    drawer,
    content,
    jumbotron,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._jumbotron = jumbotron;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInit.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      jumbotron: this._jumbotron,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;

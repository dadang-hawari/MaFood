import { injectSpeedInsights } from '@vercel/speed-insights/*';
// Import dependencies
import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-regist';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Import styles
import '../styles/main.scss';
import '../styles/responsive.scss';

// Import components
import './components/navbar';
import './components/app-hero';
import './components/list-restaurant';
import './components/loading-spinner';
import './components/app-footer';

// Initialize the App
const app = new App({
  button: document.querySelector('#btn-menu'),
  drawer: document.querySelector('ul'),
  content: document.querySelector('main'),
  jumbotron: document.querySelector('.jumbotron'),
});

injectSpeedInsights();

// Handle hashchange event
window.addEventListener('hashchange', () => {
  // Call renderPage if hash is not equal to href value of an element that contains id 'toContent'
  if (window.location.hash !== document.querySelector('#toContent').getAttribute('href')) {
    app.renderPage();
    window.scrollTo(0, 380);
  }
});

// Handle load event
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

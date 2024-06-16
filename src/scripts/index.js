import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';

import './views/components/side-nav';
import './views/components/top-dashboard';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
  });
});
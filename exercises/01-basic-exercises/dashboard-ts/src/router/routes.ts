
import { Route } from '@vaadin/router';

// Pages
import '../modules/desktop/DesktopDesktop.js';
import '../modules/clients/ClientDesktop.js';
// import '../views/home/section-header/index.js';
// import '../views/home/section-about/index.js';

export const routes: Route[] = [
  {
    path: '/',
    component: 'desktop-desktop',
  },
  {
    path: '/clients',
    component: 'client-desktop',
  },
  {
    path: '/#section-header',
    component: 'index-header',
  },
  {
    path: '/#section-about',
    component: 'index-about',
  },
];

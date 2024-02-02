import { Route } from '@vaadin/router';

// Pages
import '../views/home/index.js';
import '../views/login/index.js';
import '../views/home/section-header/index.js';
import '../views/home/section-about/index.js';

export const routes: Route[] = [
  {
    path: '/',
    component: 'page-home',
  },
  {
    path: '/login',
    component: 'page-login',
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

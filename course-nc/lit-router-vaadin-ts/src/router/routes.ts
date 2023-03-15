import { Route } from '@vaadin/router';

// Pages
import '../views/home/index.js';
import '../views/login/index.js';

export const routes: Route[] = [
  {
    path: '/',
    component: 'page-home',
  },
  {
    path: '/login',
    component: 'page-login',
  },
];

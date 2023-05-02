
import { Route } from  '@vaadin/router'

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
    path: '/section-header',
    component: 'index-header',
  },
  {
    path: '/section-about',
    component: 'index-about',
  },
];
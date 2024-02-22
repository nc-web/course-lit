
import { Route } from '@vaadin/router'

// Pages
import '../views/home/HomeDesktop'
import '../views/todo-list/TodoListsDesktop'
import '../views/about/AboutDesktop'

export const routes: Route[] = [
  {
    path: '/',
    component: 'home-desktop'
  },
  {
    path: '/todo-list-desktop',
    component: 'todo-list-desktop'
  },
  {
    path: '/about',
    component: 'about-desktop'
  }
]


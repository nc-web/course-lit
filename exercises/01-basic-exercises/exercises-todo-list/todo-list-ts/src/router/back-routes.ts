
import { Route } from '@vaadin/router'

// Pages
import '../views/home/HomeDesktop'
import '../views/todo-list/TodoListsDesktop'
import '../views/about/AboutDesktop'

export const backRoutes: Route[] = [
  {
    path: '/',
    component: 'home-desktop'
  }
]

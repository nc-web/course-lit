
import { Router } from '@vaadin/router'

import '../my-element'

// Pages
import '../views/home/HomeDesktop'
import '../views/about/AboutDesktop'
import '../views/login/LoginDesktop'


const routes = [

  {
    path: '/',
    component: 'home-desktop',
    children: []

  },

  {
    path: 'about',
    component: 'about-desktop',
    action: async () => {
      await import('../views/about/AboutDesktop')
    }
  },

  {
    path: 'login',
    component: 'login-desktop',
    action: async () => {
      await import('../views/login/LoginDesktop')
    }
  }

]

const outlet = document.getElementById('outlet')
export const router = new Router(outlet)
router.setRoutes(routes)

import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import About2 from '../components/About2'
import Contact from '../components/Contact'
import PageNotFound from '../components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about2',
      name: 'About2',
      component: About2
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})



/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

/**
 * We will create a fresh Vue application instance.
 */
import { createApp } from "vue";
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

import '../css/main.css'

axios.defaults.baseURL = 'http://localhost:8000'

/* Fetch sample data */
store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'history')

/* Dark mode */
// store.dispatch('darkMode')

router.onError(error => {
  if (/loading chunk \d* failed./i.test(error.message)) {
      window.location.reload()
    }
  })
  
/* Collapse mobile aside menu on route change */
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

/* Router Navigation Guard */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: '/login',
        query: { redirectFrom: to.fullPath }
    
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* Default title tag */
const defaultDocumentTitle = 'Admin One Vue 3 Tailwind'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})

const app = createApp(App).use(store).use(router);

app.mount("#app");

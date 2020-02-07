import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/collection/:id',
      name: 'collection',
      component: () => import('./pages/Collection.vue')
    },
    {
      path: '/work/:id',
      name: 'work',
      component: () => import('./pages/Work.vue')
    }
  ]
})
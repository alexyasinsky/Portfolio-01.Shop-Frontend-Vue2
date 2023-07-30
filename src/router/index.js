import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import cartPage from '../views/cartPage.vue'
import checkout from '../views/checkout.vue'
import single from '../views/single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: index
  },
  {
    path: '/catalog',
    name: 'Catalog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/catalogPage.vue') // вариант импорта страницы для динамической подгрузки
  },
  {
    path: '/cart',
    name: 'Cart',
    component: cartPage,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: checkout,
  },
  {
    path: '/single:id',
    name: 'Single',
    component: single,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ProductPage from '@/components/ProductPage'
import Home from '@/views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/sample-page/1',
      name: 'SamplePage1',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/sample-page/1.vue')
    },
    {
      path: '/sample-page/2',
      name: 'SamplePage2',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/sample-page/2.vue')
    },
  ]
})

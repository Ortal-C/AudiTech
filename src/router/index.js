import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/login-page.vue'
import marketPage from '../views/market-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login-page',
    component: loginPage
  },
  {
    path: '/Markets',
    name: 'market',
    component: marketPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

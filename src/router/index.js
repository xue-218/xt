import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from '../views/homeIndex/homeIndex.vue'
import About from '../views/about/about.vue'
import Plan from '../views/plan/plan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeIndex',
    component: HomeIndex
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/plan',
    name: 'plan',
    component: Plan
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import TopStories from '../components/topStories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/topstories',
    name:'TopStories',
    component: TopStories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TopStories from '../components/TopStories.vue'
// import Featured from '../components/Featured.vue'
// import Categories from '../components/Categories.vue'
import Select from '../components/Select.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/topstories',
    name:'TopStories',
    component: TopStories
  },
  // {
  //   path:'/featuredstories',
  //   name:'Featured',
  //   component: Featured
  // },
  // {
  //   path:'/categories',
  //   name:'Categories',
  //   component: Categories
  // },
  {
    path:'/select/:id/:page/',
    name:'Select',
    component:Select
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

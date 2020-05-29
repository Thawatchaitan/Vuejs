import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Demo4 from '../views/Demo4.vue'
import Demo5 from '../views/Demo5.vue'
import Demo6 from '../views/Demo6.vue'
import Demo7 from '../views/Demo7.vue'
import Demo8 from '../views/Demo8.vue'
import Demo9 from '../views/Demo9.vue'
import Demo10 from '../views/Demo10.vue'
import Practice from '../views/Prac.vue'
import Template_Test from '../views/Template_Test.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/prac',
    name:'prac',
    component:Practice
  },
  {
    path:'/T_Test',
    name:'T_Test',
    component:Template_Test
  },
  {
    path:'/demo1',
    name:'demo1',
    component:Demo1
  },
  {
    path:'/demo2',
    name:'demo2',
    component:Demo2
  },
  {
    path:'/demo3',
    name:'demo3',
    component:Demo3
  },
  {
    path:'/demo4',
    name:'demo4',
    component:Demo4
  },
  {
    path:'/demo5',
    name:'demo5',
    component:Demo5
  },
  {
    path:'/demo6',
    name:'demo6',
    component:Demo6
  },
  {
    path:'/demo7',
    name:'demo7',
    component:Demo7
  },
  {
    path:'/demo8',
    name:'demo8',
    component:Demo8
  },
  {
    path:'/demo9',
    name:'demo9',
    component:Demo9
  },
  {
    path:'/demo10',
    name:'demo10',
    component:Demo10
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

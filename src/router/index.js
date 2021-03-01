import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }
const Foo = { template: '<div>foo</div>' }
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
    path: '/phoneNum',
    name: 'PhoneNum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PhoneNum.vue')
  },
  {
    path: '/test',
    name: 'test',
    // component: Home
    components: {
      default: Foo,
      a: Bar,
      b: Baz
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

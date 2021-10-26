import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AddUnicorn from '../components/AddUnicorn.vue'
import EditUnicorn from '../components/EditUnicorn.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
     path: '/add',
     name: 'Add',
     component: AddUnicorn
   },
   {
     path: '/edit/:id',
     name: 'edit',
     component: EditUnicorn
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

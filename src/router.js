/*global Vue*/
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Notice from "@/components/Notice"
import Record from "@/components/Record"

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }, {
      path: '/record',
      name: 'Record',
      component: Record
    }
  ]
})

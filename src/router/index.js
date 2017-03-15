import Vue from 'vue'
import Router from 'vue-router'
import wechat from '@/login-component/wechat'
import login from '@/login-component/login'
import forgetpass from '@/login-component/forget-password'

Vue.use(Router)
Vue.component('login-dialog',require('../plugin/dialog'))

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'wechat',
      component: wechat
    },
    {
      path: '/login/forgetpass',
      name: 'forgetpass',
      component: forgetpass
    },
  ]
})

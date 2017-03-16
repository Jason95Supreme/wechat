import Vue from 'vue'
import Router from 'vue-router'
import wechat from '@/login-component/wechat'
import login from '@/login-component/login'
import forgetpass from '@/login-component/forget-password'
import pagewechat from '@/content-component/page-wechat'
import pagecontact from '@/content-component/page-contact'
import pagediscover from '@/content-component/page-discover'
import pageme from '@/content-component/page-me'
import booksomething from '@/content-components/book-something'

Vue.use(Router)
Vue.component('login-dialog',require('../plugin/dialog'))
Vue.component('navbar',require('../bar-component/navbar.vue'))
Vue.component('tabbar',require('../bar-component/tabbar.vue'))

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: wechat
    },
    {
      path: '/login/forgetpass',
      name: 'forgetpass',
      component: forgetpass
    },
    {
      path: '/pagewechat',
      name: 'pagewechat',
      component: pagewechat
    },
    {
      path: '/pagewechat/booksomething',
      name: 'booksomething',
      component: booksomething
    },
    {
      path: '/pagecontact',
      name: 'pagecontact',
      component: pagecontact
    },
    {
      path: '/pagediscover',
      name: 'pagediscover',
      component: pagediscover
    },
    {
      path: '/pageme',
      name: 'pageme',
      component: pageme
    },
  ]
})

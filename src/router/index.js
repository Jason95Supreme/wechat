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
import tenxun from '@/content-components/tenxun'
import friendcircle from '@/content-components/friend-circle'
import persondetail from '@/content-components/person-detail'

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
      path: '/',
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
      path: '/pagewechat/tenxun',
      name: 'tenxun',
      component: tenxun
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
      path: '/pagediscover/friendcircle',
      name: 'friendcircle',
      component: friendcircle
    },
    {
      path: '/pageme',
      name: 'pageme',
      component: pageme
    },
    {
      path: '/pageme/persondetail',
      name: 'persondetail',
      component: persondetail
    },
  ]
})

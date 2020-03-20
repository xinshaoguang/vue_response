import Vue from 'vue'
import Router from 'vue-router'
// import mainPage from '@/components/mainPage'
import home from '@/components/home'
import list from '@/components/list'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页面',
      redirect: "/home",
    },
    {
      path:"/home",
      component:home,
    },
    {
      path:"/list",
      component:list,
    },
    {
      path:"/details",
      component:details,
    },
  ]
})

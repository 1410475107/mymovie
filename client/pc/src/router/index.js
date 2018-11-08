import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MyCom from '@/components/MyCom'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({

  // http://localhost:8080/#/
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/mycom',
      name: 'MyCom',
      component: MyCom
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }
    
    
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import tiao from '@/components/tiao'
import haoyou from '@/components/haoyou'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'tiaozhuan',
      component: tiao
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/hayou',
      name: 'haoyou',
      component: haoyou
    }
  ]
})

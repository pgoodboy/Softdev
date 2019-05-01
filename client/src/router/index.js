import Vue from 'vue'
import Router from 'vue-router'
import Records from '@/components/Records'
import Records1 from '@/components/Records1'
import Records2 from '@/components/Records2'
import Records3 from '@/components/Records3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/records/1',
      component: Records
    
    },
    {
      path: '/records/2',
      component: Records1
    },
    {
      path: '/records/3',
      component: Records2
    },
    {
      path: '/records/4',
      component: Records3
    }
  ]
})
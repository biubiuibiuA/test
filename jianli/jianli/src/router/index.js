import Vue from 'vue'
import Router from 'vue-router'
import JianLi from '@/components/JianLi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JianLi',
      component: JianLi
    }
  ]
})

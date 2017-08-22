import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Hello from '@/components/Hello'
import InputFloat from '@/page/InputFloat'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/input-float',
      name: 'InputFloat',
      component: InputFloat,
      // meta: [
      //   {
      //     name: 'viewport',
      //     content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      //   }
      // ],
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import CardList from '@/components/CardList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CardList',
      component: CardList
    }
  ]
})

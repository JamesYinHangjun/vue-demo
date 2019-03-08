import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import NewsView from '@/components/NewsView'
import MyView from '@/components/MyView'
import FavView from '@/components/FavView'
import ListView from '@/components/ListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeView              // 默认打开的是HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/my',
      component: MyView
    },
    {
      path: '/fav',
      component: FavView
    },
    {
      path: '/list/:id',
      component: ListView
    }
  ]
})

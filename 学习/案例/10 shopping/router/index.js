import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'

import user from '@/views/layout/user.vue'
import cart from '@/views/layout/cart.vue'
import category from '@/views/layout/category.vue'
import home from '@/views/layout/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: home },
      { path: '/cart', component: cart },
      { path: '/user', component: user },
      { path: '/category', component: category }
    ]
  },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList },
  // 动态路由传参,确认将来是哪个商品,路由参数中携带 id
  { path: '/prodetail/:id', component: ProDetail },
  { path: '/pay', component: Pay },
  { path: '/myorder', component: MyOrder }
]

const router = new VueRouter({
  routes
})

export default router

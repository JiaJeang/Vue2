import Vue from 'vue'
import App from './App.vue'

// 路由的使用步骤 5+2;
// 五个基本步骤
// 1. vue2下载 v3.6.5; ①[npm install vue-router@3.6.5] 
// 2. 引入
// 3. 安装注册 Vue.use
// 4. 创建路由对象
// 5. 注入到new Vue中,建立关联
// 两个核心步骤
// 1. 建组件(views目录),配规则
// 2. 准备导航链接,配置路由出口(匹配组件展示的位置)

// ②引入
import VueRouter from 'vue-router'
// ③安装注册=> VueRouter 插件初始化
Vue.use(VueRouter)
// ④创建路由对象 
import My from './views/My.vue'
import Find from './views/Find.vue'
import Friend from './views/Friend.vue'
const router = new VueRouter({
  // 配规则
  // route 一条路由规则 {path : 路径 , component : 组件}
  // routes[
  //  {path : 路径 , component : 组件},
  //]
  routes: [
    { path: '/my', component: My },
    { path: '/find', component: Find },
    { path: '/friend', component: Friend },
    { path: '/', redirect: '/my' }
  ]
})

//全局 focus
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // ⑤ 注入,将路由对象注入到new Vue实例中,建立关联
  router,
}).$mount('#app')

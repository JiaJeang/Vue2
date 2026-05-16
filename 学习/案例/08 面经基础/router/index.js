import Vue from 'vue'
import VueRouter from "vue-router";
import Base1_ArticleDetail from '@/views/Base1_ArticleDetail.vue';
import Base1_Layout from '@/views/Base1_Layout.vue';
import Base2_Article from '@/views/Base2_Article.vue';
import Base2_Collect from '@/views/Base2_Collect.vue';
import Base2_Like from '@/views/Base2_Like.vue';
import Base2_User from '@/views/Base2_User.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Base1_Layout,
      // 配置二级路由 在 children 里面配置
      children: [
        { path: '/article', component: Base2_Article },
        { path: '/collect', component: Base2_Collect },
        { path: '/like', component: Base2_Like },
        { path: '/user', component: Base2_User },
      ]
    },
    { path: '/detail', component: Base1_ArticleDetail },
  ]
})

export default router
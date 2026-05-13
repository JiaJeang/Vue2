import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import My from '@/views/My.vue'
import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
const router = new VueRouter({
    routes: [
        { path: '/my', component: My },
        { path: '/find', component: Find },
        { path: '/friend', component: Friend },
        { path: '/', redirect: '/my' }
    ],
    // 自定义匹配类名
    linkActiveClass:"",
    linkExactActiveClass:"",
})

export default router
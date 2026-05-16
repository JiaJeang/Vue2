import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import NotFound from '@/views/NotFound.vue'
const router = new VueRouter({
    routes: [
        // 路由重定向
        { path: "/", redirect: '/home' },
        { path: "/home", component: Home },
        // 动态路由传参 可选符后面加?
        { name: "search", path: "/search/:words?", component: Search },
        // 匹配所有
        { path: '*', component: NotFound }
    ],
    // 自定义匹配类名
    linkActiveClass: "",
    linkExactActiveClass: "",
    // 路由模式设置
    // mode:"hash" (默认)
    mode: "history" //不带#号
})

export default router
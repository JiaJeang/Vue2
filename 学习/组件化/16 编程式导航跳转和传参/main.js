import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive('focus',{
    inserted(el){
      el.focus()
    }
})

new Vue({
  render: h => h(App),
  // ⑤ 注入,将路由对象注入到new Vue实例中,建立关联
  router,
}).$mount('#app')

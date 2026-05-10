import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册自定义指令v-focus
Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

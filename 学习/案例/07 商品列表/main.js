import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局 focus
Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

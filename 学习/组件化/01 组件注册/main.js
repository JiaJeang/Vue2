import Vue from 'vue'
import App from './App.vue'
//导入代码,往代码顶部编写
import MyButton from './components/MyButton.vue'
Vue.config.productionTip = false

//进行全局注册 → 在所有的组件范围内都能直接使用
// Vue.component('组件名',组件对象)  一次只能注册一个
Vue.component('MyButton', MyButton)

new Vue({
  render: h => h(App),
}).$mount('#app')

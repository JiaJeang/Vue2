import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'Jeang',
    count: 100
  },
  mutations: {
    // 处理函数
    // 只能接收一个参数 需要多个参数可以传对象或数组
    add (state, n) {
      state.count += n
    },
    sub (state, n) {
      state.count -= n
    },
    changeT (state, title) {
      state.title = title
    }
  }
})

export default store

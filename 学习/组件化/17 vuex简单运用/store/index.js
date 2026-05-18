import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 1. state提供数据
  state: {
    title: 'Jeang',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  // 2. mutations提供处理函数
  mutations: {
    // 只能接收一个参数 需要多个参数可以传对象或数组
    add (state, n) {
      state.count += n
    },
    sub (state, n) {
      state.count -= n
    },
    changeT (state, title) {
      state.title = title
    },
    reset (state, n) {
      state.count = n
    }
  },
  // 3. actions用来处理异步
  // 不能直接操作 state 操作 state 还是需要 commit mutation
  actions: {
    // context 上上文(此处未分模块,可以当成store仓库)
    // context.commit('mutation名字',额外参数)
    // 只能接收一个参数 需要多个参数可以传对象或数组
    reset (context, num) {
      setTimeout(() => {
        context.commit('reset', num)
      }, 1000)
    }
  },
  // 4. getters类似于计算属性
  getters: {
    // 必须有返回值,返回值就是getters的值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  }
})

export default store

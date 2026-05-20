import axios from 'axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  getters: {
    totalCount (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  },
  mutations: {
    initList (state, newList) {
      state.list = newList
    },
    updataCount (state, obj) {
      const goods = state.list.find(item => item.id === obj.id)
      Vue.set(goods, 'count', obj.newCount)
    }
  },
  actions: {
    // 获取数据
    async getList (context) {
      try {
        const res = await axios.get('http://localhost:3000/cart')
        console.log(res)
        context.commit('initList', res.data)
      } catch (err) {
        console.error('获取数据失败:', err)
      }
    },
    // 更新数量
    async updataCountAsync (context, obj) {
      // 修改更新后台数据
      const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      console.log(res)
      //   修改更新vuex数据
      context.commit('updataCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  }
}

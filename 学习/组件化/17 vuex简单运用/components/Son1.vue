<template>
  <div>
    <h1>son1-{{ $store.state.title }}-{{ count }}</h1>
    <button @click="sub(1)">-1</button>
    <button @click="sub(5)">-5</button>
    <button @click="reset(200)">一秒后重置count为200</button>
    <hr />
    <div>{{ $store.state.list }}</div>
    <div>{{ filterList }}</div>
  </div>
</template>

<script>
// 导入mapState,mapMutations
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    // 通过在computed里面来映射state里面的数据
    ...mapState(['count']),
    ...mapGetters(['filterList'])
  },
  methods: {
    // 通过在methods里面来映射mutations里面的数据
    ...mapMutations(['sub']),
    // sub (n) {
    //   this.$store.commit('sub', n)
    // }
    // 通过在methods里面来映射Actions里面的数据
    ...mapActions(['reset'])
  }
}
</script>

<style>
</style>

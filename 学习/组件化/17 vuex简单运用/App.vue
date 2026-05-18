<template>
  <div>
    <h1>App组件-{{ $store.state.title }} - {{ $store.state.count }}</h1>
    <button @click="changeT">改标题</button>
    <Son1></Son1>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
export default {
  components: {
    Son1,
    Son2
  },
  methods: {
    changeT () {
      this.$store.commit('changeT', 'JeangJia')
    }
  }
  // created () {
  //   console.log(this.$store)
  // }
}
</script>

<style>

</style>

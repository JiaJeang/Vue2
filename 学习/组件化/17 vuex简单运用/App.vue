<template>
  <div>
    <h1>App组件-{{ $store.state.title }} - {{ $store.state.count }}</h1>
    <button v-if='show' @click="show=false">改标题</button>
    <input v-else @input="changeT($event.target.value)" :value="title" @blur="show=true" v-focus type="text">
    <Son1></Son1>
    <Son2></Son2>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
export default {
  components: {
    Son1,
    Son2
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    ...mapState(['title'])
  },
  methods: {
    ...mapMutations(['changeT'])
  }
  // created () {
  //   console.log(this.$store)
  // }
}
</script>

<style>

</style>

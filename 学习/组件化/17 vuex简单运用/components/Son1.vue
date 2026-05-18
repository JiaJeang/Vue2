<template>
  <div>
    <h1>son1-{{ $store.state.title }}-{{ $store.state.count }}</h1>
    <button @click="sub(1)">-1</button>
    <button @click="sub(5)">-5</button>
  </div>
</template>

<script>
export default {
  methods: {
    sub (n) {
      this.$store.commit('sub', n)
    }
  }
}
</script>

<style>

</style>

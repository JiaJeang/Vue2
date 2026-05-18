    <template>
    <div>
        <h1>son2-{{ $store.state.title }}-{{ $store.state.count }}</h1>
        <button @click="add(1)">+1</button>
        <button @click="add(5)">+5</button>
    </div>
    </template>

<script>
export default {
  methods: {
    add (n) {
      this.$store.commit('add', n)
    }
  }
}
</script>

    <style>
    </style>

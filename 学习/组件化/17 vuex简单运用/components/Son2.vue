    <template>
  <div>
    <h1>son2-{{ $store.state.title }}-{{ $store.state.count }}</h1>
    <button @click="add(1)">+1</button>
    <button @click="add(5)">+5</button>
    <button @click="reset(100)">一秒后重置count为100</button>
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>
    <div>
      <!-- 使用模块内容 -->
      {{ $store.state.user.userInfo.name }}
      {{ $store.state.user.userInfo.age }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add (n) {
      // 调用mutations
      // this.$store.commit('mutations名字',额外参数)
      this.$store.commit('add', n)
    },
    reset (n) {
      // 调用action
      // this.$store.dispatch('action名字',额外参数)
      this.$store.dispatch('reset', n)
    }
  }
}
</script>

    <style>
</style>

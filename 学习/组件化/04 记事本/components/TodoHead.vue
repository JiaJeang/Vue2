<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>记事本</h1>
    <input
      placeholder="请输入任务"
      class="new-todo"
      v-model.trim="inp"
      @keyup.enter="adddata"
    />
    <button class="add" @click="adddata">添加任务</button>
  </header>
</template>

<script>
export default {
  methods: {
    adddata() {
      if (this.inp == "") {
        alert("请输入内容!");
        return;
      }
      this.$emit("adddata", this.inp);
      this.inp = "";
    },
  },
  data() {
    return {
      inp: "",
    };
  },
};
</script>

<style>
</style>
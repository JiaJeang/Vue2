<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHead @adddata="adddata"></TodoHead>
    <TodoMain :list="list" @reItem="reItem"></TodoMain>
    <TodoFooter :len="list.length" @clear="clearItem"></TodoFooter>
  </section>
</template>
<script>
import TodoHead from "./components/TodoHead.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoMain from "./components/TodoMain.vue";
export default {
  components: {
    TodoFooter,
    TodoHead,
    TodoMain,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, name: "爬山" },
        { id: 2, name: "游泳" },
        { id: 3, name: "骑行" },
      ],
    };
  },
  methods: {
    adddata(value) {
      this.list.push({ id: +new Date(), name: value });
    },
    reItem(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    clearItem() {
      this.list = [];
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newlist) {
        localStorage.setItem("list", JSON.stringify(newlist));
      },
    },
  },
};
</script>

<style>
</style>

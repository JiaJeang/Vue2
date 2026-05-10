<template>
  <div id="app">
    <BaseA @change="change"></BaseA>
    <BaseB></BaseB>
  </div>
</template>

<script>
import BaseA from "./components/BaseA.vue";
import BaseB from "./components/BaseB.vue";
export default {
  components: {
    BaseA,
    BaseB,
  },
  data() {
    return {
      color: "pink",
      info: {
        uname: "Jeang",
        age: 18,
      },
    };
  },
  provide() {
    return {
      color: this.color,
      info: this.info,
    };
  },
  methods: {
    change() {
      //通过provide向下流动的数据只有复杂数据类型是响应式
      this.color = "green";//不会改变
      this.info.uname = "Jia Jenag";
      this.info.age = 19;
    },
  },
};
</script>

<style>
</style>
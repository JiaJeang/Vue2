<template>
  <div>
    接收到父元素流动消息:
    <br />
    name:{{ info.uname }}
    <br />
    age:{{ info.age }}
    <br />
    color:{{ color }}
    <br />
    <button @click="change">更改数据</button>
  </div>
</template>

<script>
export default {
  //通过inject来接收父元素向下流动的数据
  inject: ["info", "color"],
  created() {
    console.log(this.info);
  },
  methods: {
    change() {
      this.$emit("change");
    },
  },
};
</script>

<style>
</style>
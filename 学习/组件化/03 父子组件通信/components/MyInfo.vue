<template>
  <div class="info">
    <h2>个人信息</h2>
    <br />
    <div>名字:{{ uname }}</div>
    <div>年龄:{{ age }}</div>
    <div>是否单身:{{ isSignle ? "是" : "否" }}</div>
    <div>座驾:{{ car.brand }}</div>
    <div>兴趣爱好:{{ hobby.join(",") }}</div>
  </div>
</template>

<script>
export default {
  //使用对象接收父元素信息 可以校验
  //不用数组默认校验类型
  props: {
    uname: {
      type: String,
    },
    age: {
      type: Number,
    },
    isSignle: Boolean,
    car: Object,
    hobby: Array,
  },
};
</script>

<style scoped>
.info {
  box-sizing: border-box;
  width: 300px;
  height: 500px;
  background-color: #ccc;
  padding: 20px;
}
</style>
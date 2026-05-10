<template>
  <div class="box">
    <MyHeader></MyHeader>
    <MyMain></MyMain>
    <MyFooter></MyFooter>
</div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyMain from "./components/MyMain.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  // 局部注册
  components: {
    MyHeader,
    MyMain,
    MyFooter,
  },
};
</script>

<style>
.box {
  height: 400px;
  width: 200px;
  padding: 15px;
  border-radius: 10px;
  background-color: #ccc;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
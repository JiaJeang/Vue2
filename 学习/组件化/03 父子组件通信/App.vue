<template>
  <div id="app">
    <h4 v-html="msg"></h4>
    <MySon :tetle="MyTitle" @change="changeJeang"></MySon>
    <MyInfo
      :uname="uname"
      :age="age"
      :isSignle="isSignle"
      :car="car"
      :hobby="hobby"
    ></MyInfo>
  </div>
</template>

<script>
import MySon from "./components/MySon.vue";
import MyInfo from "./components/MyInfo.vue";
export default {
  components: {
    MySon,
    MyInfo,
  },
  data() {
    return {
      MyTitle: "Jeang",
      msg: "Tetle",
      // info-data
      uname: "Jeang",
      age: 18,
      isSignle: true,
      car: {
        brand: "X",
      },
      hobby: ["羽毛球", "乒乓球", "qqq"],
    };
  },
  methods: {
    changeJeang(value) {
      console.log(value);
      this.msg = value;
    },
  },
};
</script>
<style>
/* 
添加 scoped 可以独立css
*/
* {
  margin: 0;
  padding: 0;
}
</style>
<template>
  <div id="app">
    <div class="head">
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
html {
  background-color: #E7DFDD;
}
</style>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.head {
  height:40px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  a {
    text-decoration: none;
    text-align: center;
    color: white;
    line-height: 40px;
    width: 80px;
    background-color: #b83624;
    margin-left: 10px;
    border-radius: 10px;
  }
}
.main {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
<template>
  <div id="app">
    <div class="head">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
    </div>
    <div class="out">
      <!-- 路由出口 -> 匹配的组件展示位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head{
  margin: 0 auto;
  width: 70%;
  height: 70px;
  background-color: #333333;
  display: flex;
  a{
    color: #fff;
    text-decoration: none;
    border: 1px solid #000;
    flex:1;
    display: block;
    text-align: center;
    line-height: 70px;
  }
}
</style>
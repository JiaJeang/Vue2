<template>
  <div id="app">
    <div class="head">
      <!-- 
        router-link to=""
        本质还是a标签 会添加两个类名
        router-link-active       模糊匹配
        router-link-exact-active 精确匹配
      -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
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
.head {
  margin: 0 auto;
  width: 70%;
  height: 70px;
  display: flex;
  a {
    color: #fff;
    text-decoration: none;
    border: 1px solid #000;
    background-color: #333;
    flex: 1;
    text-align: center;
    line-height: 70px;
  }
  a.router-link-active {
    background-color: #ccc;
    border: 0px;
  }
}
</style>
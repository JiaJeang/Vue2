<template>
  <div class="home">
    <div class="head">
      <img src="@/utils/cat.gif" alt="" />
    </div>
    <div class="inp">
      <input type="text" placeholder="" />
      <button>搜索🔍</button>
    </div>
    <div class="hot">
        热门搜索:
        <!-- 
            查询参数传参 用于传递多个参数(&连接)的场景 
            跳转: to="/path?参数名=值"
            接收: $toute.query.参数名
        -->
        <!-- <router-link to="/search?key=demo1">demo1</router-link> -->
        <!-- 
            动态路由传参 传单个参数方便 
            路由: /path/:参数名
            跳转: to="/path/值" 
            接收: $toute.params.参数名
        -->
        <router-link to="/search/demo2">demo2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 100px;
  }
}
.inp {
  margin: 20px auto 0;
  height: 30px;
  width: 500px;
  background-color: pink;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  input {
    flex: 1;
    border: 0px;
    outline: none;
    padding-left: 10px;
    font-size: 18px;
  }
  button {
    width: 80px;
    border: 0px;
  }
}
.hot{
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    a{
        margin-left: 10px;
    }
}
</style>
<template>
    <div class="search">
        <!-- 接收查询参数 -->
        <div>搜索关键字:{{$route.query.key}}</div>
        <!-- <div>搜索关键字:{{$route.params.words}}</div> -->
        <br>
        <div>搜索结果:</div>
        <ul>
            <li>..........</li>
            <li>..........</li>
            <li>..........</li>
            <li>..........</li>
            <li>..........</li>
        </ul>
    </div>  
</template>

<script>
export default {
  name: "MySearch",
  created(){
    // 在created中 获取路由参数
    // this.$route.query.参数名 
    console.log(this.$route.query)
  }
};
</script>

<style lang="less" scoped>
.search{
    width: 50%;
    border: 1px solid #000;
    border-radius: 15px;
    padding: 20px;
}
</style>
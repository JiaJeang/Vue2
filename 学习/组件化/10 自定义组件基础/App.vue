<template>
  <div id="div">
    <h1>Jeang</h1>
    <!-- 自定义指令v-focus -->
    <input v-focus ref="inp" type="text">
    <h2 v-color="color1">red</h2>
    <h2 v-color="color2">blue</h2>
  </div>
</template>

<script>
export default {
  // mounted(){
    // this.$refs.inp.focus();
  // }
  data(){
    return{
      color1:'red',
      color2:'blue'
    }
  },
  //局部注册自定义指令v-color
  directives:{
    color:{
      //第一个参数el:指令绑定的元素
      //第二个参数c:指令的绑定值
      inserted(el,c){
        el.style.color=c.value;
      },
      //更新时调用
      update(el,c){
        el.style.color=c.value;
      }
    }
  }
}
</script>

<style>

</style>
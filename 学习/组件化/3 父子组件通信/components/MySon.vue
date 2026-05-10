<template>
  <div class="box">
    {{ tetle }}
    <button @click="change">修改</button>
  </div>
</template>

<script>
export default {
  // props : 用于子元素获取父元素信息 父→子
  // 可以是数组接收也可以是对象接收 (对象可以添加校验)
  // props:['title'],
  props: {
    tetle:{
        type:String,
    }
  },
  methods:{
    change(){
        // 通过$emit 向父组件发送消息通知 子→父
        this.$emit('change','Jeang')
    }
  }
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
  line-height: 200px;
  text-align: center;
}
</style>
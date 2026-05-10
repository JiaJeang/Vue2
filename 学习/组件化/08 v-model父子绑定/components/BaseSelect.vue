<template>
  <select :value="value" @change="handSelectId">
    <option value="101">北京</option>
    <option value="102">上海</option>
    <option value="103">广州</option>
    <option value="104">深圳</option>
    <option value="105">成都</option>
  </select>
</template>

<script>
export default {
  props: {
    //v-model 绑定的话 必须用value接收
    value: String,
  },
  methods:{
    handSelectId(e){
        //v-model 绑定的话必须用input事件触发
        this.$emit('input',e.target.value)
    }
  }
};
</script>

<style>
</style>
<template>
  <button @click="trigger">通用按钮</button>
</template>

<script>
export default {
  methods:{
    trigger(){
      alert("触发了全局组件")
    }
  }
};
</script>

<style>
button {
  border: 0px;
  border-radius: 5px;
}
button:hover {
  background-color: #ccc;
}
</style>
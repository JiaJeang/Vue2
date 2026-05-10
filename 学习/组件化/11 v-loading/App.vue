<template>
  <div id="app">
    <div class="box" v-loading="isLoading">
      Jeang
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLoading:true,
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  directives:{
    loading(el,binding){
      binding.value?el.classList.add('loading'):el.classList.remove('loading');
    },
    updated(el,binding) {
       binding.value?el.classList.add('loading'):el.classList.remove('loading');
    },
  }
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>

<style>
.loading::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #E7DFDD url('@/utils/cat.gif') no-repeat center;
  background-size: 30%; 
  pointer-events: none;
}
</style>
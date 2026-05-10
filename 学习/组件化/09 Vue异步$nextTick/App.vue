<template>
  <div id="app">
    <div v-if="vis">
      <span>{{ msg }}</span>
      <button @click="edit">编辑</button>
    </div>
    <div v-else>
      <input type="text" v-model="val" ref="inp" @keydown.enter="queren" />
      <button @click="queren">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vis: true,
      msg: "Jeang",
      val: "",
    };
  },
  methods: {
    edit() {
      //$nextTick 筮保 DOM 更新完成后执行回调
      // this.$nextTick(()=>{
      //业务逻辑
      // })
      this.vis = false;
      this.$nextTick(() => {
        this.$refs.inp.focus();
      });
    },
    queren() {
      this.vis = true;
      this.msg = this.val;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
button {
  background-color: #fff;
  border: 0px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 40px;
  height: 20px;
  margin-left: 10px;
}
input {
  margin-left: 10px;
  padding-left: 10px;
  width: 160px;
}
</style>
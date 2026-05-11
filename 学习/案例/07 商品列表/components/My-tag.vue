<template>
  <div>
    <input
      v-if="inpShow"
      type="text"
      value=""
      v-focus
      @blur="inpShow = false"
    />
    <span v-else style="cursor: pointer" @dblclick="pushInp">xxxx</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inpShow: false,
    };
  },
  methods: {
    pushInp() {
      setTimeout(() => {
        this.inpShow = true;
        // 通过$nextTick聚焦
        // this.$nextTick(() => {
        //   this.$refs.inp.focus();
        // });
        this.def=this.inp
      }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
input {
  padding: 0 8px;
  width: 70px;
  height: 20px;
  border: 1px solid #006bd2;
  border-radius: 4px;
  outline: none;
}
</style>
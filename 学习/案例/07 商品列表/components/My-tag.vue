<template>
  <div>
    <input
      v-if="inpShow"
      type="text"
      :value="value"
      v-focus
      @blur="inpShow = false"
      @keydown.enter="changeInp"
      ref="inp"
    />
    <span v-else style="cursor: pointer" @dblclick="pushInp">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    // v-model 要用 value 接收
    value: String,
  },
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
        this.def = this.inp;
      }, 500);
    },
    changeInp(e) {
      if (e.target.value.trim() === "") {
        // alert("输入为空!");
        return;
      }
      console.log("数据更改成功");
      // this.$emit("input", this.$refs.inp.value);
      // 通过事件对象获取value 通过input回传
      this.$emit("input", e.target.value);
      this.inpShow = false;
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
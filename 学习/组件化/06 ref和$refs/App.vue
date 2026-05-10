<template>
  <div class="app">
    <BaseForm ref="form"></BaseForm>
    <div class="btn">
      <button @click="submit">提交</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseForm,
  },
  methods: {
    submit() {
      //通过refs调用子组件的属性username
      console.log(this.$refs.form.username);
      //通过refs调用子组件的方法fromClear
      console.log(this.$refs.form.fromClear());
    },
    reset() {
      console.log(this.$refs.form);
      this.$refs.form.fromReset();
    },
  },
};
</script>

<style scoped>
.app {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div .btn {
  margin: 10px;
  display: flex;
}
button {
  margin: 10px;
}
</style>
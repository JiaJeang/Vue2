<template>
  <div>
    <form>
      用户:
      <input type="text" v-model="username" />
      <br />密码:
      <input type="password" v-model="password" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    fromClear() {
      return {
        username: this.username,
        password: this.password,
      };
    },
    fromReset() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>
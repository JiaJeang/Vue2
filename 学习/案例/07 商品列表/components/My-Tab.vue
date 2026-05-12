<template>
  <table>
    <thead>
      <tr>
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <!-- 作用域插槽传参 -->
        <slot name="main" :item="item"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
// import MyTag from "./My-tag.vue";
export default {
  components: {
    // MyTag,
  },
  props: {
    list: Array,
  },
};
</script>

<style lang="less" scoped>
table {
  margin: 50px auto;
  width: 80%;
  border-collapse: collapse;
  //tr变化时不影响表格整体
  table-layout: fixed;
}
th,
td {
  height: 35px;
  padding: 5px;
  text-align: center;
  overflow: hidden;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
}
th {
  background-color: #f7f7f7;
  border-bottom: 2px solid #006bd2;
}
td {
  border-bottom: 1px solid #ccc;
}
</style>
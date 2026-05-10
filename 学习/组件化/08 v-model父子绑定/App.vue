<template>
  <div>
    <!--  :value+@input绑定 -->
    <!-- <BaseSelect :value="selectId" @input="selectId=$event"></BaseSelect> -->
    <!--  v-model绑定 必须用value接收 事件必须用input触发 -->
    <BaseSelect v-model="selectId"></BaseSelect>
    <div>当前选中ID: {{ selectId }}</div>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  components: {
    BaseSelect,
  },
  data() {
    return {
      selectId: "103",
    };
  },
};
</script>

<style>
</style>
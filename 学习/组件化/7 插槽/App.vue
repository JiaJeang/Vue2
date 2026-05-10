<template>
  <div id="app">
    <MyDialog>
      <!-- 
        v-solt:插槽名 <=> #插槽名 
      -->
      <template v-slot:head>警告</template>
      <template #main><i>确定要退出吗?</i></template>
      <template #footer>确定</template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue';
export default {
  components:{
    MyDialog,
  }

}
</script>

<style>

</style>
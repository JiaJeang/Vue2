<template>
  <div id="app">
    <BaseTab :list="list1">
      <!-- 
        默认插槽 #default="obj"
        具名插槽 #插槽名='变量名' 接收插槽传递过来的数据(对象)
      -->
      <template #default="obj">
        <button :style="{'background-color': color1}" @click="del(obj.item.id)">
          删除
        </button>
      </template>
    </BaseTab>
    <BaseTab :list="list2">
      <!-- 
        也可以直接解构赋值接收插槽传递过来的数据(对象)
       -->
      <template #default="{ item }">
        <button :style="{'background-color': color2}" @click="look(item)">
          查看
        </button>
      </template>
    </BaseTab>
  </div>
</template>

<script>
import BaseTab from "./components/BaseTab.vue";
export default {
  components: {
    BaseTab,
  },
  data() {
    return {
      color1: "red",
      color2: "#4eac00",
      list1: [
        { id: 1, name: "张三", age: 18, sex: "男" },
        { id: 2, name: "李四", age: 19, sex: "女" },
        { id: 3, name: "王五", age: 20, sex: "男" },
      ],
      list2: [
        { id: 1, name: "张三", age: 18, sex: "男" },
        { id: 2, name: "李四", age: 19, sex: "女" },
        { id: 3, name: "王五", age: 20, sex: "男" },
      ],
    };
  },
  methods: {
    del(id) {
      this.list1 = this.list1.filter((item) => item.id !== id);
    },
    look(item) {
      alert(`姓名:${item.name},年龄:${item.age},性别:${item.sex}`);
    },
  },
};
</script>

<style>
</style>
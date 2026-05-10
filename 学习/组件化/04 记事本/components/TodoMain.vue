<template>
  <!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for='(item,ind) in list' :key="item.id">
        <div class="view">
          <span class="index">{{ ind+1 }}.</span> <label>{{ item.name }}</label>
          <button class="destroy" @click="reItem(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props:{
    list:Array,
  },
  methods:{
    reItem(id){
      this.$emit('reItem',id)
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="tab">
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, ind) in list" :key="ind.id">
          <td>{{ ind + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <slot :item="item" smg="传递成功"></slot>
            <!-- 
                传递的为一个对象:
                {
                    item:传递过来的数组元素,
                    smg:"传递成功"
                }
            -->
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
table {
  width: 300px;
  border-spacing: 0;
}
th {
  background-color: #4eace7;
}
table,
td,
th {
  border: 1px solid #000;
  height: 38px;
  text-align: center;
}
button {
  background-color: red;
  border: 0;
  width: 40px;
  height: 25px;
  border-radius: 5px;
}
</style>
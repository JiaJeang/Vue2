<template>
  <div id="app">
    <MyTab :list="list">
      <template #head>
        <th>编号</th>
        <th>商品</th>
        <th>名称</th>
        <th>备注</th>
      </template>
      <template #main="{ item }">
        <td>{{ item.id }}</td>
        <td>
          <img :src="item.src" :title="item.name" />
        </td>
        <td style="font-size: 12px">{{ item.name }}</td>
        <td>
          <MyTag v-model="item.log"></MyTag>
        </td>
      </template>
    </MyTab>
    <MyTab :list="list">
      <template #head>
        <th>编号</th>
        <th>名称</th>
        <th>商品</th>
        <th>备注</th>
      </template>
      <template #main="{ item }">
        <td>{{ item.id }}</td>
        <td style="font-size: 12px">{{ item.name }}</td>
        <td>
          <img :src="item.src" :title="item.name" />
        </td>
        <td>
          <MyTag v-model="item.log"></MyTag>
        </td>
      </template>
    </MyTab>
  </div>
</template>

<script>
import MyTag from "./components/My-tag.vue";
import MyTab from "./components/My-Tab.vue";
export default {
  components: {
    MyTag,
    MyTab,
  },
  data() {
    return {
      inpShow: false,
      list: [
        {
          id: 101,
          src: "https://img11.360buyimg.com/jdcms/s240x240_jfs/t1/400538/34/14533/62777/69ae68ecFfe01dfbe/008332032015fe60.jpg.avif",
          name: "中国黄金(CHINA GOLD)阴山翠玉髓手镯女和田玉镯子",
          log: "手镯",
        },
        {
          id: 102,
          src: "https://img30.360buyimg.com/jdcms/s240x240_jfs/t1/412205/25/5551/296951/69cb6446Fa10a6e18/0083320320320517.png.avif",
          name: "苹果16pro iPhone16ProMax移动联通电信全网通5G手机",
          log: "手机",
        },
        {
          id: 103,
          src: "https://img10.360buyimg.com/pcpubliccms/s1440x1440_jfs/t1/428558/13/16266/1787161/69fdae24F044e40f5/0083000000b0cc73.jpg.avif",
          name: "阿迪达斯(adidas)短袖t恤男士夏季跑步健身运动衣快干衣透气男装T恤 黑白 L",
          log: "衣服",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
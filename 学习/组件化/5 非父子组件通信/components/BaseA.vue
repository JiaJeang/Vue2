<template>
  <div class="box">
    接收方:
    <br />
    接收到的消息:{{ msg }}
    <br />
    <BaseASon @change="change"></BaseASon>
  </div>
</template>

<script>
import Bus from "@/utils/EventBus";
import BaseASon from "./BaseASon.vue";
export default {
  components: {
    BaseASon,
  },
  data() {
    return {
      msg: "",
    };
  },
  //等渲染完毕后再通过$on监听事件
  created() {
    //事件总线$on来监听Bus
    Bus.$on("sendMsg", (msg) => {
      console.log(msg);
      this.msg = msg;
    });
  },
  methods: {
    change() {
      this.$emit("change");
    },
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
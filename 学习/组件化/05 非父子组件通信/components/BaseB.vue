<template>
  <div class="box">
    发送方:
    <br>
    <button @click="clickSend">发送</button>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus';
export default {    
    methods:{
        clickSend(){
            //通过$emit发送被监听事件的消息
            Bus.$emit('sendMsg','Jeang')
        }
    }
}
</script>

<style scoped>
.box{
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    box-sizing:border-box;
}
button{
    border:0px;
    border: 1px solid #000;
}
</style>
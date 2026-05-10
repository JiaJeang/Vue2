<template>
  <div class="box">
    <div class="head">
      <h2><slot name="head">标题</slot></h2>
      <span style="cursor: pointer;">❌️</span>
    </div>
    <hr/>
    <div class="main">
      <slot name="main">主题内容</slot>
    </div>
    <div class="footer">
      <button class="off">取消</button>
      <button><slot name="footer">按钮</slot></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing:border-box
}
.box {
  margin: 100px auto;
  width: 450px;
  height: 250px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  position: relative;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red;
}
.main {
  font-size: 18px;
  margin-top: 20px;
}
.footer {
  /* width: 100%; */
  position: absolute;
  bottom: 0px;
  right: 0px;
}
button {
  width: 60px;
  height: 40px;
  margin: 15px;
  background-color: #00aeec;
  border: 0px;
  border-radius: 4px;
}
.off{
  background-color: #fff;
  border: 1px solid #000;
}
</style>
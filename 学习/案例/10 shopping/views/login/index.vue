<template>
  <div id="app">
    <van-nav-bar
      title="登录"
      left-text=""
      right-text=""
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="onClickRight"
    />
    <div id="box">
      <h1>手机号登录</h1>
      <br>
      <span>未注册的手机号登录后将自动注册</span>
      <div class="inp">
        <div><input type="text" placeholder="请输入手机号" /></div>
        <div>
          <input type="text" placeholder="请输入图形验证码" />
          <span>
             <img
            src="https://th.bing.com/th/id/OIP.HdW3BXzKNM_gm-q3RPP7HwAAAA?w=179&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            alt=""/>
          </span>
        </div>
        <div>
          <input type="text" placeholder="请输入短信验证码" />
          <span>
            <b>获取验证码</b>
          </span>
        </div>
      </div>
        <div class="but"><button>登录</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginIndex'
}
</script>

<style scoped lang="less">
#box {
  padding: 30px 40px;
  span {
    color: #ccc;
  }
  .inp {
    margin-top: 40px;
    div {
      height: 40px;
      border-bottom: 1px solid #ccc;
      margin-top: 20px;
      input {
        margin-top: 10px;
        outline: none;
        border: 0px;
        float: left;
        padding-left: 15px;
      }
      img{
        height: 40px;
      }
      span{
        float: right;
      }
    }
  }
  .but{
    margin-top: 30px;
    button{
      width: 100%;
      height: 50px;
      border-radius: 40px;
      border: 0px;
      background-color: orange;
      color: #fff;
    }
  }
}
</style>

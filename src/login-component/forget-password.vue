<template>
  <div class="for_page">
   <div class="for_nav">
    <i class="iconfont icon-close" @click="back"></i>
    <p>找回账号密码</p>
   </div>
   <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd">
            <i class="iconfont icon-shouji"></i>
          </div>
          <div class="weui-cell__bd">
              <p>已绑定手机号</p>
              <p class="ps">可通过手机号+短信验证码登录</p>
          </div>
          <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd">
            <i class="iconfont icon-qq"></i>
          </div>
          <div class="weui-cell__bd">
              <p>已绑定QQ号</p>
              <p class="ps">可通过QQ号+QQ密码登录</p>
          </div>
          <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd">
            <i class="iconfont icon-tubiao209"></i>
          </div>
          <div class="weui-cell__bd">
              <p>已绑定邮箱</p>
              <p class="ps">可通过邮箱地址重设密码</p>
          </div>
          <div class="weui-cell__ft"></div>
      </a>
    </div>
    <p class="other">无法通过以上方式找回账号密码</p>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
            <p>申诉找回微信账号密码</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods:{
    back(){
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.for_page{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f0eff5;
}
.for_nav{
  width: 100%;
  height: 50px;
  background-color: #2e3132;
  padding-left: 15px;
}
.for_nav p{
  color: #fff;
  font-size: 18px;
  line-height: 18px;
  position: absolute;
  top: 16px;
  left: 65px;
}
.icon-close{
  color: #fff;
  font-size: 25px;
  line-height: 25px;
  position: absolute;
  top: 13px;
}
.icon-close:after{
  content: '';
  position: absolute;
  width: 1px;
  height: 25px;
  left: 35px;
  background-color: #555;
}
.icon-shouji,
.icon-qq,
.icon-tubiao209{
  font-size: 30px;
  color: #C8C8CD;
  margin-right: 15px;
}
.ps{
  color: #C8C8CD;
  font-size: 14px;
}
.other{
  margin: 15px 15px -15px;
  color: #C8C8CD;
  font-size: 14px;
}
</style>

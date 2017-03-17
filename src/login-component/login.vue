<template>
  <div class="login_page">
    <div class="login_nav">
      <p>微信</p>
    </div>
    <div class="login_content">
      <div class="content_pic"></div>
      <p class="content_num">135 xxxx xxxx</p>
      <div class="content_input">
        <i class="iconfont icon-iconfontlock"></i>
        <input type="password" placeholder="请填写密码" maxlength="15" class="input" v-model="input_pass">
        <i class="iconfont icon-close" @click="icon_close" v-show="icon"></i>
      </div>

      <a  class="weui-btn weui-btn_primary login_btn"  v-if="disable" >登录</a>
      <router-link to='/pagewechat' class="weui-btn weui-btn_primary " v-else>登录</router-link>
      <p class="forget_pass" @click="forget">忘记密码</p>
      <p class="more" @click="more">更多</p>
    </div>
    <login-dialog v-show="ldialog"></login-dialog>
    <div class="weui-mask" @click="mask" v-show="ldialog"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      input_pass:'',
      icon:false,
      ldialog:false,
      disable:true
    }
  },
  computed:{

  },
  watch:{
    input_pass(curVal,oldVal){
　　　this.icon = true
      if(this.input_pass !== ''){
        this.icon = true
        this.disable = false
      }
      else{
        this.icon = false
        this.disable = true
      }
    }
　},

  methods:{
    icon_close(){
      this.input_pass = ''
    },
    forget(){
      this.$router.push('/login/forgetpass')
    },
    more(){
      this.ldialog = true
    },
    mask(){
      this.ldialog = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_page{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.weui-mask{
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.login_nav{
  width: 100%;
  height: 50px;
  background-color: #2e3132;
  padding-left: 15px;
}
.login_nav p{
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 15px;
}
.login_content{
  width: 100%;
  height: calc(100% - 50px);
  position: absolute;
  padding-top: 80px;
  text-align: center;
}
.content_pic{
  position: absolute;
  background: url(../assets/1.jpg);
  background-size: 100% 100%;
  width: 100px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.content_num{
  margin-top: 110px;
}
.content_input{
  margin-top: 30px;
  text-align: left;
}
.content_input:after{
  content: '';
  position: absolute;
  border-bottom: 1px solid;
  width: calc(95% - 12px);
  left: 15px;
  margin-top: 40px;
}
.icon-iconfontlock{
  color: #51c332;
  font-size: 25px;
  margin-left: 15px;
}
.icon-close{
  color: #555;
  position: absolute;
  font-size: 20px;
  line-height: 20px;
  margin-top: 10px;
}
.input{
  width: 75%;
  border: none;
  outline: none;
  letter-spacing: 8px;
}
.input::-webkit-input-placeholder{
  letter-spacing: 2px;
}
.weui-btn_primary{
  width: 92%;
  margin-top: 20px;
  background-color: #51c332;
}
.login_btn{
  opacity: 0.2;
}
.forget_pass{
  margin-top: 20px;
  font-size: 14px;
  color: #2497e3;
}
.more{
  font-size: 14px;
  color: #2497e3;
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
}
.content_input:after{
  color: #51c332;
}
.weui-btn_primary:not(.weui-btn_disabled):active{
  color: #fff;
  background-color: #51c332;
}
</style>

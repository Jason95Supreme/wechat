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

      <a  class="weui-btn weui-btn_primary" :class="{login_btn:isActive}">登录</a>
      <p class="forget_pass" @click="forget">忘记密码</p>
      <p class="more" @click="more">更多</p>
    </div>
    <login-dialog v-show="ldialog"></login-dialog>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      input_pass:'',
      icon:false,
      isActive:true,
      ldialog:false,
    }
  },
  computed:{

  },
  watch:{
    input_pass(curVal,oldVal){
　　　this.icon = true
      if(this.input_pass !== ''){
        this.icon = true
        this.isActive = false
      }
      else{
        this.icon = false
        this.isActive = true
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
</style>

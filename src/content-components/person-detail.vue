<template>
  <div class="page">
    <div class="detail_navbar">
      <router-link to='/pageme'>
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <p style="letter-spacing: 3px;">个人信息</p>
    </div>

    <div class="content">
      <div class="weui-cells">
        <div class="weui-cell line">
          <div class="weui-cell__bd">
              <p>头像</p>
          </div>
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../assets/porpic.jpg">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>昵称</p>
          </div>
          <div class="weui-cell__ft">忘记了围脖</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>微信号</p>
          </div>
          <div class="weui-cell__ft">ffr2333</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>二维码名片</p>
          </div>
          <div class="weui-cell__ft"><i class="iconfont icon-chuanchengshejiiconzitihua01"></i></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>我的地址</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>性别</p>
          </div>
          <div class="weui-cell__ft">男</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>地区</p>
          </div>
          <div class="weui-cell__ft">冰岛 雷克雅未克</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>个性签名</p>
          </div>
          <div class="weui-cell__ft">很多事情不是有希望才坚持，而是坚持了才有希望</div>
        </div>
      </div>

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
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #ebebeb;
}
.detail_navbar{
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #2e3132;
  padding-left: 15px;
  z-index: 1;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-sizing: border-box;
}
.detail_navbar p{
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 15px;
  left: 70px;
}

.icon-fanhui{
  position: absolute;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  top: 10px;
}
.icon-fanhui{
  left: 15px;
}
.icon-fanhui:after{
  content: '';
  position: absolute;
  width: 1px;
  height: 30px;
  background-color: #111;
  margin-left: 10px;
}
.content{
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0;
  overflow: auto;
}
.line{
  line-height: 0.5;
}
.weui-media-box__thumb{
  width: 65px;
  height: 65px;
}
.weui-cell__ft{
  font-size: 14px;
  width: 290px;
  letter-spacing: 1px;
}
.icon-chuanchengshejiiconzitihua01{
  font-size: 25px;
}
</style>

<template>
  <div class="con_page">
    <navbar></navbar>
    <div class="con_content">

      <div class="weui-cells">
        <router-link to='/pageme/persondetail' class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/1.jpg" class="img_po">
          </div>
          <div class="weui-cell__bd">
              <p>红叶飞血</p>
              <p class="me_ps">微信号: xxyy322</p>
          </div>
          <div class="weui-cell__ft"><i class="iconfont icon-chuanchengshejiiconzitihua01"></i></div>
        </router-link>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/xc.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>相册</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/sc.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>收藏</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/qb.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>钱包</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/kb.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>卡包</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/bqing.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>表情</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/sz.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>设置</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

    </div>

    <tabbar isMe="user"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:visited{
  color: #000;
}
.con_page{
  position: fixed;
  width: 100%;
  height: 100%;
}
.con_content{
  position: fixed;
  width: 100%;
  height: auto;
  background-color: #ebebeb;
  top: 50px;
  bottom: 57px;
  overflow: auto;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.weui-cells{
  margin-bottom: 20px;
}
.me_ps{
  margin-top: 5px;
  color: #C8C8CD;
  font-size: 14px;
}
.img_po{
  width: 60px;
  height: 60px;
  margin-right: 15px;
}
.img{
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-top: 10px;
}
.icon-chuanchengshejiiconzitihua01{
  font-size: 25px;
}
.weui-cell__bd p:active{
  color: #000;
}
</style>

<template>
  <div class="con_page">
    <navbar></navbar>
    <div class="con_content">

      <div class="weui-cells">
        <router-link to='/pagediscover/friendcircle' class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/pyq.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>朋友圈</p>
          </div>
          <div class="weui-cell__ft"></div>
        </router-link>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/sys.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>扫一扫</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/yyy.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>摇一摇</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/fjdr.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>附近的人</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/plp.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>漂流瓶</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/yx.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>游戏</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

    </div>

    <tabbar isDis="faxian1"></tabbar>
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
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: auto;
}
.img{
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-top: 10px;
}
.weui-cell__bd p:active{
  color: #000;
}
.weui-cells{
  margin-bottom: 20px;
}
</style>

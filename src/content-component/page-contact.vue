<template>
  <div class="con_page">
    <navbar></navbar>
    <div class="con_content">
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/xdpy.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>新的朋友</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/ql.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>群聊</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/bq.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>标签</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/gzh.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>公众号</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/dh.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>阿德</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/dh.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>阿达</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/bz.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>班长</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/wgr.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>外长</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/bz.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>班长</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/wgr.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>外长</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/bz.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>班长</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/wgr.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>外长</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

    </div>

    <tabbar isCon="tongxunlu1"></tabbar>
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

.con_content{
  position: absolute;
  height: auto;
  width: 100%;
  background-color: #ebebeb;
  overflow: auto;
  top: 50px;
  bottom: 57px;
}
.weui-cells{
  margin-bottom: 20px;
}
.weui-cell{
  padding: 5px 15px;
}
.img{
  width: 40px;
  height: 40px;
  margin-right: 15px;
  margin-top: 8px;
}
</style>

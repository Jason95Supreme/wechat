<template>
  <div class="con_page">
    <navbar></navbar>
    <div class="con_content">
      <div class="weui-cells">
        <router-link to='/pagewechat/booksomething' class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/dyh.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>订阅号</p>
              <p class="we_ps">满满的全是套路</p>
          </div>
          <div class="weui-cell__ft">13:45</div>
        </router-link>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/txxw.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>腾讯新闻</p>
              <p class="we_ps">男子每天卖8000个馒头 月赚2万</p>
          </div>
          <div class="weui-cell__ft">2016年6月14日</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/yhwy.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>雨火未央</p>
              <p class="we_ps">这个消息你能看到不这个消息你能看到不这个消息你能看到不</p>
          </div>
          <div class="weui-cell__ft">3月8日</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="../assets/mtjt.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>明天的今天</p>
              <p class="we_ps">我发现了一个特别好玩的事</p>
          </div>
          <div class="weui-cell__ft">11:22</div>
        </div>
      </div>
    </div>

    <tabbar isWe="liaotian02"></tabbar>
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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;
}
.img{
  width: 60px;
  height: 60px;
  margin: 8px 15px 4px 0;
}
.weui-cell:before{
  left: 0;
}
.we_ps{
  margin-top: 5px;
  color: #C8C8CD;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 180px;
  overflow: hidden;
}
.weui-cells{
  margin-top: 0;
}
.weui-cell{
  padding: 0px 15px;
}
.weui-cell__ft{
  font-size: 14px;
}
</style>

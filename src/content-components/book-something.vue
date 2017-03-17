<template>
  <div class="book_page">
    <div class="book_navbar">
      <router-link to='/pagewechat'>
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <p style="letter-spacing: 3px;">订阅号</p>
      <i class="iconfont icon-sou"></i>
    </div>
    <div class="book_content">
      <div class="weui-cells">
        <div class="weui-cell" v-for="i in items">
          <div class="weui-cell__hd">
            <img src="../assets/dyh.jpg" class="img">
          </div>
          <div class="weui-cell__bd">
              <p>订阅号</p>
              <p class="we_ps">满满的全是套路</p>
          </div>
          <div class="weui-cell__ft">13:45</div>
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
      items:10,
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book_page{
  position: fixed;
  width: 100%;
  height: 100%;
}
.book_content{
  position: fixed;
  width: 100%;
  height: auto;
  overflow: auto;
  top: 50px;
  bottom: 0;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.book_navbar{
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
.book_navbar p{
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 15px;
  left: 70px;
}
.icon-sou,
.icon-fanhui{
  position: absolute;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  top: 10px;
}
.icon-sou{
  right: 30px;
  margin-top: 3px;
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
.weui-cells{
  margin-top: 0;
}
.weui-cell{
  padding: 0px 15px;
}
.img{
  width: 60px;
  height: 60px;
  margin: 8px 15px 4px 0;
}
.we_ps{
  margin-top: 5px;
  color: #C8C8CD;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
}
</style>

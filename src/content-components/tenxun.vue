<template>
  <div class="page">
    <div class="tenxun_navbar">
      <router-link to='/pagewechat'>
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <p style="letter-spacing: 3px;">腾讯新闻</p>
      <i class="iconfont icon-shezhi1"></i>
    </div>
    <div class="tenxun_content">

      <div class="box" v-for="i in items">
        <p class="time">{{times}}</p>
        <div class="con_box">
          <div class="con_pic">
            <p class="pic_title">生活总是美好的 向前看活在当下</p>
          </div>
          <div class="con_title">
            <div class="ti_content">
              <p class="ti_title">日本美术馆在纽约拍卖中国国宝 10件拍品大赚17亿</p>
              <div class="ti_pic1"></div>
            </div>
            <div class="ti_content">
              <p class="ti_title">日本美术馆在纽约拍卖中国国宝 10件拍品大赚17亿</p>
              <div class="ti_pic2"></div>
            </div>
            <div class="ti_content">
              <p class="ti_title">日本美术馆在纽约拍卖中国国宝 10件拍品大赚17亿</p>
              <div class="ti_pic3"></div>
            </div>
          </div>
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
      items: 10,
      times:''
    }
  },
  mounted(){
    let t = new Date()
    this.times = t.getHours() + ':' + t.getMinutes()
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
}
.tenxun_navbar{
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
.tenxun_navbar p{
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 15px;
  left: 70px;
}

.icon-shezhi1,
.icon-fanhui{
  position: absolute;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  top: 10px;
}
.icon-shezhi1{
  right: 30px;
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
.tenxun_content{
  position: absolute;
  width: 100%;
  height: auto;
  top: 50px;
  bottom: 0;
  background-color: #ebebeb;
  text-align: center;
  overflow: auto;
}
.box{
  width: 100%;
  height: 450px;
}
.time{
  margin-top: 10px;
  width: 90px;
  margin-left: calc(50% - 45px);
  background-clip: content-box;
  background-color: rgba(0,0,0,0.2);
  box-sizing: border-box;
  color: #fff;
}
.con_box{
  width: 95%;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  margin: 10px auto;
  box-shadow: 0 0 1px #555;
  border-radius: 2px;
}
.con_pic{
  background: url(../assets/conpic.jpg);
  background-size: 100% 100%;
  width: 95%;
  height: 160px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 10px auto;
}
.pic_title{
  width: 100%;
  height: 30px;
  position: absolute;
  line-height: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: rgba(0,0,0,0.3);
  color: #fff;
  text-align: left;
  padding-left: 15px;
  box-sizing: border-box;
  letter-spacing:2px;
}
.con_title{
  width: 100%;
  height: 225px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px auto;

}
.ti_content{
  width: 95%;
  height: 73px;
  margin: 0px auto;
 /* border: 1px solid;*/
}
.ti_content:before{
  content: '';
  position: absolute;
  width: 95%;
  height: 1px;
  background-color: #eee;
  left: 0;
  right: 0;
  margin: 5px auto;
}
.ti_title{
  width: 80%;
  text-align: left;
  line-height: 25px;
  padding: 15px 5px 0 0;
  letter-spacing: 1px;
}
.ti_pic1,
.ti_pic2,
.ti_pic3{
  background: url(../assets/conpic.jpg);
  background-size: 100% 100%;
  width: 60px;
  height: 60px;
  position: absolute;
  margin: 0 auto;
  top: 12px;
  right: 10px;
}
.ti_pic1{
  top: 12px;
}
.ti_pic2{
  top: 85px;
}
.ti_pic3{
  top: 158px;
}
</style>

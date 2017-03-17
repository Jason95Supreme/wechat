<template>
  <div class="page">
    <div class="friend_navbar">
      <router-link to='/pagediscover'>
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <p style="letter-spacing: 3px;">朋友圈</p>
      <i class="iconfont icon-camera"></i>
    </div>
    <div class="fri_content">
      <div class="con_backpic"></div>
      <div class="con_content">
        <div class="portrait">
          <p class="por_p">忘记了围脖</p>
          <div class="por_back">
            <div class="por_pic"></div>
          </div>
        </div>

        <div class="con_tip">
          <div class="tip_back">
            <div class="tip_pic"></div>
          </div>
          <span class="name">青蚨儿</span>
          <div class="tip_content">
            <div class="tip_con_pic"></div>
            <p>有一种普罗旺斯叫阿维尼翁</p>
          </div>
          <span class="time">3小时前</span>
          <i class="iconfont icon-bd_huifu"></i>
        </div>

        <div class="con_tips" v-for="i in item">
          <div class="tip_back">
            <div class="tip_pic"></div>
          </div>
          <span class="name">青蚨儿</span>
          <div class="tip_content">
            <div class="tip_con_pic"></div>
            <p>有一种普罗旺斯叫阿维尼翁</p>
          </div>
          <span class="time">3小时前</span>
          <i class="iconfont icon-bd_huifu"></i>
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
      item:3,
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
}
.friend_navbar{
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
.friend_navbar p{
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 15px;
  left: 70px;
}
.icon-camera,
.icon-fanhui{
  position: absolute;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  top: 10px;
}
.icon-camera{
  right: 30px;
  margin-top: 2px;
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
.fri_content{
  position: absolute;
  width: 100%;
  height: auto;
  top: 50px;
  bottom: 0;
  overflow: auto;
}
.con_backpic{
  position: absolute;
  background: url(../assets/backpic.jpeg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 300px;
  top: 0;
}
.con_content{
  position: absolute;
  width: 100%;
  height: auto;
  min-height: calc(100% - 300px);
  top: 300px;
}
.portrait{
  position: absolute;
  width: 200px;
  height: 100px;
  right: 15px;
  top: -50px;
}
.por_p{
  color: #fff;
  line-height: 60px;
  letter-spacing: 1px;
}
.por_back{
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  right: 0;
  top: 0;
  box-shadow: 0 0 1px #555;
}
.por_pic{
  position: absolute;
  background: url(../assets/porpic.jpg) no-repeat;
  background-size: 100% 100%;
  width: 96px;
  height: 96px;
  left: 0;
  right: 0;
  top: 50%;
  margin: 0 auto;
  transform: translateY(-50%);
}

.con_tip{
  position: relative;
  width: 100%;
  min-height: 150px;
  z-index: -1;
  margin-top: 60px;
}
.con_tip:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #eee;
  bottom: 0;
  left: 0;
}
.con_tips{
  position: relative;
  width: 100%;
  min-height: 150px;
  z-index: -1;
  margin-bottom: 10px;
}
.con_tips:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #eee;
  bottom: 0;
  left: 0;
}

.name{
  color: #3e5686;
  margin-left: 80px;
  margin-top: 10px;
  line-height: 40px;
}
.tip_back{
  position: absolute;
  width: 80px;
  height: 100%;

}
.tip_pic{
  position: absolute;
  background: url(../assets/porpic.jpg) no-repeat;
  background-size: 100% 100%;
  width: 60px;
  height: 60px;
  left: 0;
  right: 0;
  top: 10px;
  margin: 0 auto;
}
.tip_content{
  position: absolute;
  width: calc(100% - 95px);
  height: 60px;
  margin-left: 80px;
  background-color: #ebebeb;
}
.tip_content p{
  color: #000;
  margin-left: 60px;
  width: calc(100% - 70px);
  line-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tip_con_pic{
  position: absolute;
  background: url(../assets/wgr.jpg) no-repeat;
  background-size: 100% 100%;
  width: 50px;
  height: 50px;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.time{
  position: absolute;
  width: 100px;
  color: #888;
  bottom: 15px;
  left: 80px;
  font-size: 14px;
}
.icon-bd_huifu{
  color: #98abd1;
  font-size: 30px;
  position: absolute;
  bottom: 0;
  right: 15px;
}
</style>

<template>
  <div class="navbar">
    <p style="letter-spacing: 3px;">微信</p>
    <i class="iconfont icon-sou"></i>
    <i class="iconfont icon-tianjia" @click="add"></i>
    <transition name="ani">
      <div class="weui-actionsheet" v-show="isDisplay">
        <div class="weui-actionsheet__menu">
          <div class="weui-actionsheet__cell"><i class="iconfont icon-liaotian02"></i>发起群聊</div>
          <div class="weui-actionsheet__cell"><i class="iconfont icon-icon"></i>添加朋友</div>
          <div class="weui-actionsheet__cell"><i class="iconfont icon-saoyisao"></i>扫一扫</div>
          <div class="weui-actionsheet__cell"><i class="iconfont icon-daifukuan"></i>收付款</div>
          <div class="weui-actionsheet__cell"><i class="iconfont icon-tubiao209"></i>帮助与反馈</div>
        </div>
      </div>
    </transition>
  <div class="mask" @click="mask" v-show="isDisplay"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isDisplay:false,
    }
  },
  methods:{
    add(){
      this.isDisplay = !this.isDisplay
    },
    mask(){
      this.isDisplay = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: #2e3132;
  padding-left: 15px;
  z-index: 1;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.navbar p{
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 15px;
}
.icon-sou,
.icon-tianjia{
  position: absolute;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  top: 10px;
}
.icon-sou{
  right: 90px;
  margin-top: 3px;
}
.icon-tianjia{
  right: 20px;
}
.weui-actionsheet{
  width: 200px;
  right: 15px;
  top: -205px;
  bottom: initial;
  left: initial;
  box-shadow: 0 0 1px #000;
}
.weui-actionsheet__menu{
  background-color: #2e3132;
}
.weui-actionsheet__cell{
  color: #fff;
  text-align: left;
  padding: 0px 20px;
  font-size: 14px;
  line-height: 50px;
  display: flex;
}
.weui-actionsheet__cell:before{
  border-top: 1px solid #000;
}
.weui-actionsheet__cell:active{
  background-color: #222;
}
.icon-liaotian02,
.icon-icon,
.icon-saoyisao,
.icon-daifukuan,
.icon-tubiao209
{
  font-size: 25px;
  margin-right: 25px;
  float: left;
  margin-top: 1px;
}
.mask{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0);
  z-index: -1;
}

.ani-enter-active{
  animation: fadeIn 0.2s;
}
.ani-leave-active{
  animation: fadeOut 0.3s;
}

</style>

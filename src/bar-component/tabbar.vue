<template>
  <div class="weui-tabbar">
  <a class="weui-tabbar__item">
    <router-link to='/pagewechat' class="weui-tabbar__item">
      <i class="iconfont icon-1" :class="'icon-' + isWe"></i>
      <p class="weui-tabbar__label">微信</p>
    </router-link>
  </a>

    <a class="weui-tabbar__item">
      <router-link to='/pagecontact' class="weui-tabbar__item">
        <i class="iconfont icon-tongxunlu" :class="'icon-' + isCon"></i>
        <p class="weui-tabbar__label">通讯录</p>
      </router-link>
    </a>

    <a class="weui-tabbar__item">
      <router-link to='/pagediscover' class="weui-tabbar__item">
        <i class="iconfont icon-faxian" :class="'icon-' + isDis"></i>
        <p class="weui-tabbar__label">发现</p>
      </router-link>
    </a>

    <a class="weui-tabbar__item">
      <router-link to='/pageme' class="weui-tabbar__item">
        <i class="iconfont icon-wo1" :class="'icon-' + isMe"></i>
        <p class="weui-tabbar__label">我</p>
      </router-link>
    </a>

  </div>
</template>

<script>
export default {
  name: 'hello',
  props:{
    isWe: String,
    isCon: String,
    isDis: String,
    isMe: String,
  },
  data () {
    return {

    }
  },
  computed:{
    // isIcon(){
    //   return this.$store.getters.getIcon
    // }
  },
  methods:{
    // wechat(){
    //   this.$store.dispatch('setIcon','liaotian02')
    // },
    // contact(){
    //  this.$store.dispatch('setIcon','tongxunlu1')
    // },
    // discover(){
    //   this.$store.dispatch('setIcon','faxian1')
    // },
    // me(){
    //   this.$store.dispatch('setIcon','user')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-tabbar{
  position: fixed;
  max-width: 768px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.weui-tabbar__item{
  padding: 0;
}
.weui-tabbar__label{
  margin-top: -5px;
}
.icon-1,
.icon-tongxunlu,
.icon-faxian,
.icon-wo1{
  font-size: 26px;
}
.icon-liaotian02,
.icon-tongxunlu1,
.icon-faxian1,
.icon-user{
  color: #51c332;
}

.icon-liaotian02 + p,
.icon-tongxunlu1 + p,
.icon-faxian1 + p,
.icon-user + p
{
  color: #51c332;
}

</style>

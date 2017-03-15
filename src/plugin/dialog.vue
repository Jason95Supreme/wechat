<template>
    <div class="weui-skin_android" id="androidActionsheet" v-show="ldialog">
      <div class="weui-mask" @click="mask"></div>
      <div class="weui-actionsheet">
        <div class="weui-actionsheet__menu">
          <div class="weui-actionsheet__cell">切换账号</div>
          <div class="weui-actionsheet__cell">注册</div>
          <div class="weui-actionsheet__cell">微信安全中心</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  props:{
    ldialog: true
  },
  data () {
    return {

    }
  },
  methods:{
    mask(){
      this.ldialog = false
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

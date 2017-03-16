<template>
  <div class="navbar">
    <p>微信</p>
    <i class="iconfont icon-sou"></i>
    <i class="iconfont icon-tianjia"></i>
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
.navbar{
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #2e3132;
  padding-left: 15px;
  z-index: 1;
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
  right: 110px;
  margin-top: 3px;
}
.icon-tianjia{
  right: 40px;
}
</style>

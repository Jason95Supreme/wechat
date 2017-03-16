<template>
  <div class="page">
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {

    }
  },
  mounted(){
      const vm = this
      setTimeout(function(){
        vm.$router.push('/login')
      },2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/wechat.jpg);
  position: fixed;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}

</style>

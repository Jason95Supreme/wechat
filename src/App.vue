<template>
  <div id="app">
    <transition :name="isAnimate">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed:{
    isAnimate(){
      return this.$store.getters.getAnimate
    }
  },
  watch:{
    '$route' (to,from) {
      const vm = this
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      const toPage = to.path.split('/')[1].slice(0,4)
      let transitionName =' '
      //判断进入子页面执行下面动画
      if(toDepth !== fromDepth){
        transitionName = toDepth > fromDepth ? 'bounce' : 'vbounce'
      }
      //判断进入同级页面执行下面动画
      else{
        transitionName = toDepth === fromDepth && toPage !== 'page' ? 'fade' : ''
      }
      vm.$store.dispatch('setAnimate',transitionName)
    }
  }
}
</script>

<style>

.bounce-enter-active {
  animation: slideInRight .5s ease-out;
}
.bounce-leave-active {
  animation: slideOutLeft .5s ease-out;
}
.vbounce-enter-active {
  animation: slideInLeft .5s ease-out;
}
.vbounce-leave-active {
  animation: slideOutRight .5s ease-out;
}

.fade-enter-active {
  animation: fadeIn .5s ease-out;
}
.fade-leave-active {
  animation: fadeOut .5s ease-out;
}
</style>

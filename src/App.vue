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
      let transitionName = toDepth > fromDepth ? 'bounce' : 'vbounce'
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
</style>

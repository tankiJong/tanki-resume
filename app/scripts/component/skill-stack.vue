<template>
  <div class="skill-stack">
    <div class="programming">
      <bar precent="90%" name="C++"></bar>
      <bar precent="90%" name="JavaScript"></bar>
      <bar precent="90%" name="Java"></bar>
      <bar precent="90%" name="UE4"></bar>
      <bar precent="90%" name="Unity"></bar>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
import bar from './bar.vue';
export default {
  components:{
    bar,
  }
}
</script>

<style lang="sass">
.skill-stack{
  .bar{
    margin-top: 20px;
  }
}
</style>

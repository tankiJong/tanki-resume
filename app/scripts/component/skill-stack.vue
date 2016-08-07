<template>
  <div class="skill-stack">
    <div class="programming">
      <bar precent="90%" name="HTML & CSS"></bar>
      <bar precent="90%" name="JavaScript"></bar>
      <bar precent="85%" name="Java"></bar>
      <bar precent="80%" name="C#"></bar>
      <bar precent="73%" name="C++"></bar>
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

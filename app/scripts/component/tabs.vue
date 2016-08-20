<template>
<div  class="tabs">
  <a-tab
     v-for = "info in infos"
    :class="{active: info.title === currentTab}"
    @on-switch="switchTab(info.title)"
    :info="info" >
  </a-tab>
</div>

</template>

<script>
import aTab from './a-tab.vue';
import infos from '../content.index.js';
export default {
  data: ()=> ({
    currentTab: 'foo',
    infos,
  }),
  components:{
    aTab,
  },
  methods:{
    switchTab(title){
      console.log('called', title)
      this.currentTab = title;
    },
  },
  created(){
    this.switchTab(this.infos[2].title);
  }
}
</script>

<style lang="sass">
</style>

<template>
  <div class="app" :class="{cover: notActive}">
    <div class="info-tab">
      <div class="info-tab-header" :class="{animate: !notActive}">
          <div class="name-box-wrapper">
            <div class="name-box">
              <div class="avatar-container" @click="toggle">
                <div class="avatar"></div>
              </div>
              <h1>Tanki Zhang</h1>
              <h3>- Full Stack Engineer -</h3>
              <div class="contacts">
                <span><a href="mailto: tanki_jong@hotmail.com"><i class="demo-icon icon-mail"></i></a></span>
                <span><a href="http://github.com/tankijong"><i class="demo-icon icon-github-circled"></i></a></span>
                <span><a href="https://www.linkedin.com/in/tankijong"><i class="demo-icon icon-linkedin"></i></a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="info-tab-content" :class="{animate: !notActive}">
        Hello, I'm a full stack engineer @ <a href="http://daocloud.io">daocloud</a>.
        <skill-stack></skill-stack>
        <tabs></tabs>
      </div>
    </div>
  </div>
</template>

<script>
import skillStack from './skill-stack.vue';
import tabs from './tabs.vue';
export default {
  data:()=>({
    notActive: true,
  }),
  methods:{
    toggle(){
      this.notActive = !this.notActive;
    }
  },
  components:{
    'skill-stack': skillStack,
    'tabs': tabs,
  }
}
</script>

<style lang="sass">
.app{
  height: 100%;
}
</style>

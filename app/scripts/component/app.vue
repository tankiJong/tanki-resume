<template>
  <div class="app" :class="{cover: !isActive}">
    <div class="info-tab">
      <div class="info-tab-header" :class="{animate: isActive}">
        <div class="name-box-wrapper">
          <div class="name-box">
            <div class="avatar-container" @click="toggle">
              <div class="pulse"></div>
              <div class="pulse"></div>
              <div class="pulse"></div>
              <div class="avatar"></div>
            </div>
            <h1>Tanki Zhang</h1>
            <h3>- Full Stack Engineer -</h3>
            <div class="contacts">
              <span><a href="mailto: tanki_jong@hotmail.com"><i class="demo-icon icon-mail"></i></a></span>
              <span><a href="http://github.com/tankijong"><i class="demo-icon icon-github-circled"></i></a></span>
              <span><a href="https://www.linkedin.com/in/tankijong"><i class="demo-icon icon-linkedin"></i></a></span>

            </div>
            <div class="hint-word">Clicking my avatar to know more about me ;)</div>
          </div>
        </div>
      </div>
      <div class="info-tab-content" :class="{animate: isActive}">
        <div class="intro">
          Hello, I'm a full stack engineer @ <a href="http://daocloud.io">daocloud</a>.
        </div>
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
    isActive: false,
  }),
  methods:{
    toggle(){
      this.isActive = !this.isActive;
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

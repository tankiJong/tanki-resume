<template>
  <div class="app" :class="{cover: !active, init: isInit}">
    <div class="info-tab">
      <div class="info-tab-header" :class="{'animate': isActive, 'nc-animate': isNotChromeActive}">
        <div class="name-box-wrapper">
          <div class="name-box">
            <div class="avatar-container" @click="toggle">
              <div class="avatar"></div>
              <div class="pulse"></div>
              <div class="pulse"></div>
              <div class="pulse"></div>
            </div>
            <h1>Tanki Zhang</h1>
            <h3>- Game Developer -</h3>
            <h3>- Full Stack Web Engineer -</h3>
            <div class="contacts">
              <span><a target="_blank" href="mailto: tanki_jong@hotmail.com"><i class="icon-mail"></i></a></span>
              <span><a target="_blank" href="http://github.com/tankijong"><i class="icon-github-circled"></i></a></span>
              <span><a target="_blank" href="https://www.linkedin.com/in/tankijong"><i class="icon-linkedin"></i></a></span>
              <span><a target="_blank" href="https://github.com/tankiJong/tanki-resume/blob/master/source/tianyi-zhang-resume.pdf?raw=true"><i class="icon-globe"></i></a></span>
            </div>
            <div class="hint-word">Clicking my avatar to know more about me ;)</div>
          </div>
        </div>
      </div>
      <div class="info-tab-content" :class="{animate: isActive}">
        <div class="intro">
          Hello, I'm a game developer @ <a target="_blank" href="//smu.edu/Guildhall">SMU Guildhall</a>.
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
    isNotChromeActive: false,
    isInit: true,
  }),
  methods:{
    toggle(){
      this.isInit = false;

      const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      if(!isChrome){
        this.isNotChromeActive = !this.isNotChromeActive;
      } else {
        this.isActive = !this.isActive;
      }
    }
  },
  computed:{
    active() {
      return this.isActive || this.isNotChromeActive;
    }
  },
  components:{
    'skill-stack': skillStack,
    'tabs': tabs,
  }
}
</script>

<style lang="sass">
  .app {
    height: 100%;
  }
</style>

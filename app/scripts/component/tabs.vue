<template>
  <div class="tabs">
    <a-tab v-for="info in infos" :class="{active: info.title === currentTab}" @on-switch="switchTab(info.title)" :info="info">
    </a-tab>
  </div>

</template>

<script>
import aTab from './a-tab.vue';
import infos from '../content.index.js';
export default {
  data: ()=> ({
    currentTab: '',
    infos,
  }),
  components:{
    aTab,
  },
  methods:{
    switchTab(title){
      console.log('called', title)
      if(this.agent.IPHONE || this.agent.SMART_PHONE){
        this.currentTab = (this.currentTab === title) ? '' : title;
        return true;
      }
      this.currentTab = title;
      return true;
    },
  },
  created(){
    if(this.agent.IPHONE || this.agent.SMART_PHONE){
      return;
    }
    this.switchTab(this.infos[0].title);
  },
  computed:{
    agent(){
      const ua = navigator.userAgent.toLowerCase();

      const mua = {
        IOS: /ipod|iphone|ipad/.test(ua), //iOS
        IPHONE: /iphone/.test(ua), //iPhone
        IPAD: /ipad/.test(ua), //iPad
        OSX: /Macintosh/.test(ua), //OSX
        ANDROID: /android/.test(ua), //Android Device
        WINDOWS: /windows/.test(ua), //Windows Device
        TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device
        MOBILE: /mobile|Mobile/.test(ua), //Mobile Device (iPad)
        ANDROID_TABLET: false, //Android Tablet
        WINDOWS_TABLET: false, //Windows Tablet
        TABLET: false, //Tablet (iPad, Android, Windows)
        SMART_PHONE: false //Smart Phone (iPhone, Android)
      };

      mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;
      mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);
      mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;
      mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;

      return mua;
    }
  }
}
</script>

<style lang="sass">

</style>

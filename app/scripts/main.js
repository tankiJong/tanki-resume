import Vue from 'vue';
import skillStack from './component/skill-stack.vue';

new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    'skill-stack': skillStack,
  }
});

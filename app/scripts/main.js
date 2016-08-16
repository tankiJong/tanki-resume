import Vue from 'vue';
import skillStack from './component/skill-stack.vue';
import tabs from './component/tabs.vue';
import md from './content.index.js';

console.log(md);
new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    'skill-stack': skillStack,
    'tabs': tabs,
  }
});

import Vue from 'vue';
import app from './component/app.vue'
import md from './content.index.js';

console.log(md);
new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    app,
  }
});

daovoice('init', {
  app_id: "c9ca9a76"
});
daovoice('update');


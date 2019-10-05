<template>
<div class="a-tab">
  <div class="title" @click="notify">{{ info.title }}</div>
  <div class="content">
    <slot><pre>{{{ info.content }}}</pre></slot>
  </div>
</div>
</template>

<script>
export default {
  props:{
    info:{
      type: Object,
      default: ()=>({
        title: 'foo',
        content: 'fuz',
      }),
    }
  },
  methods:{
    notify(){
      this.$dispatch('on-switch');
    }
  }
}
</script>

<style lang="sass">
@import '../../styles/includes.scss';

.a-tab>.title{
  text-align: center;
  cursor: pointer;
  color: darken($bg-color, 10%);
  opacity: 1;
  border: 1px solid darken($bg-color, 10%);
  width: 80%;
  margin: 21px auto;
  line-height: 28px;
  border-radius:15px;
  transition: all 0.5s;
  display: block;

  &:first-child{
    margin-top: 20px;
  }
  &:hover{
    color: $base-gray;
    background-color: darken($bg-color, 10%);
  }
}
.a-tab.active .title{
  color: $base-gray;
  background-color: darken($bg-color, 10%);
}
$content-width: 100% - $info-tab-width;
$content-margin: 40px;
.content, pre{
  display: none;
  position: fixed;
  left: $info-tab-width;
  width: calc(#{$content-width} - #{2 * $content-margin});
  color: $base-gray;
  top: 0;
  padding: $content-margin;
  height: calc(100% - #{2 * $content-margin});
  overflow-y: auto;


  @media only screen and (min-width: 1125px) {
    //screen min width caculate with: $tab-max-size/$info-tab-width
    left: $tab-max-size;
    width: calc(100% - #{$tab-max-size} - #{2 * $content-margin});
  }

  .active &{
    display: block;
  }
}

@media only screen and (max-device-width: $mobile-max-width), only screen and (max-width: $mobile-max-width){
  .info-tab{
    height: auto !important;
  }

  .content{
    position: relative;
    margin: 20px;
    padding:0;
    width: calc(100% - 40px);
    left: 0;
    height: auto;
    transform-origin: top;
    overflow-y: hidden;
  }

  pre{
    position: relative;
    margin: 0;
    width: 100%;
    left: 0;
    height: auto;
    display: block;
    padding:0;
    overflow-y: hidden;
    .active &{
      animation: display-pre 0.5s ease;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes display-pre{
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
}
</style>

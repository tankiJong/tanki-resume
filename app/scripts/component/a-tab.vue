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

.title{
  text-align: center;
  margin-top:30px;
  cursor: pointer;
  color: darken($bg-color, 10%);
  opacity: 1;
  border: 1px solid darken($bg-color, 10%);
  width: 80%;
  margin: 30px auto;
  line-height: 30px;
  border-radius:15px;
  transition: all 0.5s;

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
  margin: $content-margin;
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

</style>

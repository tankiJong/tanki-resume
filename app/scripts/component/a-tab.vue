<template>
<div class="a-tab">
  <div class="title" @click="notify">{{ info.title }}</div>
  <div class="content">
    <slot>{{{ info.content }}}</slot>
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
  transition: opacity 0.3s;

  &:hover{
    opacity: 0.5;
  }
}

.content{
  display: none;
  position: absolute;
  left: $info-tab-width;
  color: $base-gray;
  top: 0;
  margin: 10px;
  height: calc(100% - 20px);
  overflow-y: auto;


  @media only screen and (min-width: 1125px) {
    //screen min width caculate with: $tab-max-size/$info-tab-width
    left: $tab-max-size;
  }

  .active &{
    display: block;
  }
}

</style>

<template>
  <div class="bar-container bar">
  <p>{{ name }}</p>
    <div class="bar-content" :style="{width: widthStyle, animation: animationStyle }"></div>
    <span>{{ precent }}</span>
  </div>
</template>

<script>
export default {
  props:{
    precent: {
      type: String,
      default: '50%',

    },
    name:{
      type: String,
      default: '',
    },
  },
  computed:{
    animationStyle(){
      const rnd = Math.random();
      const animationTime = new Number(this.precent.replace('%', '')) / 100 * 2;
      return `swing ${animationTime}s cubic-bezier(0.38, 0, 0.6, 0.97) ${rnd}s infinite alternate`;
    },

    widthStyle(){
      return `calc(${this.precent} - 90px)`;
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../../styles/includes.scss';
$height: 5px;
$word-margin: 90px;
.bar-container{
  @include title-font;
  width: 80%;
  height: $height;
  position: relative;
  display: flex;
  z-index: 1;

  &:before{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width:100%;
    margin-left: $word-margin;
    width: calc(100% - 90px);
    content: '';
    border-top:1px solid gray(60%);
    z-index: -1;
    animation: none !important;
  }

  >p{
    position: absolute;
    padding-left: 10px;
    margin: 0;
    color: gray(40%);
    z-index: 2;
    font-size: 10px;
    line-height: $height;
  }
  >span{
    position: absolute;
    left:100%;
    margin-left: 10px;
    font-size: 12px;
    line-height: $height;
    color: gray(70%);
  }

  .bar-content{
    width: 100%;
    height: 100%;
    min-width: 5%;
    margin-left: $word-margin;
    border-radius: 2px;
    background-color: gray(70%);
    border-right: 0px solid gray(50%);
    z-index: 1;
    transform-origin: left;
  }
}

@keyframes swing{
  from{
    transform: scaleX(1);
  }
  to{
    transform: scaleX(1.01);
  }
}
</style>

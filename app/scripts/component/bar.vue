<template>
  <div class="bar-container bar">
  <p>{{ name }}</p>
    <div class="bar-content" :style="{width: widthStyle, animation: animationStyle, '-webkit-animation': animationStyle }"></div>
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
      const rnd = Math.random()*5;
      const animationTime = new Number(this.precent.replace('%', '')) / 100 * 2;
      return `swing ${animationTime}s cubic-bezier(0.6, 0.02, 0.38, 0.98) ${rnd}s infinite alternate`;
    },

    widthStyle(){
      return `calc(${this.precent} - 90px)`;
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../../styles/includes.scss';
$line-height: 12px;
$height: 5px;
$word-margin: 90px;
.bar-container{
  @include title-font;
  width: 80%;
  height: $line-height;
  position: relative;
  z-index: 1;
  text-align: right;

  &:before{
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateZ(0);
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
    width: $word-margin;
    position: absolute;
    margin: 0;
    margin-left: -10px;
    color: gray(40%);
    z-index: 2;
    font-size: 10px;
    line-height: $line-height;
  }
  >span{
    position: absolute;
    left:100%;
    margin-left: 10px;
    font-size: 12px;
    line-height: $line-height;
    color: gray(70%);
    @include vertical-center;
  }

  .bar-content{
    @include vertical-center;
    width: 100%;
    height: $height;
    min-width: 5%;
    margin-left: $word-margin;
    border-radius: 2px;
    background-color: gray(70%);
    border-right: 0px solid gray(50%);
    z-index: 1;
    transform-origin: left;
    animation: none;
  }
}

@keyframes swing{
  from{
    transform: scaleX(1) translateY(-50%) translateZ(0);
  }
  to{
    transform: scaleX(1.05) translateY(-50%) translateZ(0);
  }
}
</style>

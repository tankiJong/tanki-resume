<template>
  <div class="bar-container">
  <p>{{ name }}</p>
    <div :style="{width: precent }"></div>

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
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/includes.scss';
$height: 20px;
.bar-container{
  @include title-font;
  width: 150px;
  height: $height;
  position: relative;
  display: flex;
  z-index: 1;
  &:before{
    position: absolute;
    top: 50%;
    left: 0;
    width:100%;
    content: '';
    border-top:1px solid gray(80%);
    z-index: -1;
  }

  >p{
    position: absolute;
    padding-left: 10px;
    margin: 0;
    color: gray(10%);
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
  }

  >div{
    width: 100%;
    height: 100%;
    min-width: 5%;
    padding-left: 10px;
    border-radius: 2px;
    background-color: gray(50%);
    border-right: 0px solid gray(50%);
    z-index: 1;
    transform-origin: left;
    animation: swing 2s cubic-bezier(0.38, 0, 0.6, 0.97) 0s infinite alternate;
  }
}

@keyframes swing{
  from{
    transform: scaleX(1);
  }
  to{
    transform: scaleX(1.05);
  }
}
</style>

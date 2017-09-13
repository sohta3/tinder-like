<template>
  <div class="card" v-bind:class="{ inactive: !partner.isActive }">
    <img :alt="partner.name" :src="partner.img">
    <span><strong>{{ partner.name }}</strong> {{ partner.age }} {{ partner.residence}} </br> {{ partner.tweet }}</span>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['partner']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .card {
    position: absolute;
    background-color: transparent;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    // transition: all .1s linear;
    opacity: 1;
    &:nth-child(1){
      z-index: 5;
      //animation: no 0.6s infinite;
    }
    &:nth-child(2){
      z-index: 4;
      top: 7px;
      //transform: scale(0.98);
    }
    &:nth-child(3){
      z-index: 3;
      top: 14px;
      //transform: scale(0.96);
    }
    &:nth-child(n+4){
      z-index: 2;
      //transform: scale(0.7);
    }
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      content: '';
    }
    &.inactive {
      transform: translateY(-300px);
      transition: opacity 800ms 500ms ease-out;
      opacity: 0;
      transform: translateY(-200px);
      transition: 0.8s;
      transition-delay: 0.5s;
      opacity: 0;
    }
  }

  .card img {
    width: 105%;
    background: white;
  }

  .card span {
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    width: 100%;
    padding: 10px;
    font: 16px;
    line-height: 30px;
    color: #555;
  }

  .card span strong {
    font-weight: 600;
    color: #000;
  }
</style>

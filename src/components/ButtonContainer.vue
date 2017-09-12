<template>
  <div id="control">
    <div class="button no" v-on:click="nope">
      <a href="#" class="trigger"></a>
    </div>

    <!--
    <div class="button info">
      <a href="#" class="trigger"></a>
    </div>
    -->

    <div class="button yes" v-on:click="like">
      <a href="#" class="trigger"></a>
    </div>
  </div>
</template>

<script>
import eventHub from '../shared/EventHub'

export default {
  name: 'buttoncontainer',
  methods: {
    like: function () {
      eventHub.$emit('like')
    },
    nope: function () {
      eventHub.$emit('nope')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#control {
  position: relative;
  margin: 15px auto 0;
  width: 50%;
  top: 700px;
  .button {
    width: 65px;
    height: 65px;
    background: #eee;
    position: absolute;
    top: 5px;
    border-radius: 50%;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    .trigger {
      background: white;
      display: block;
      border-radius: 50%;
      width: 75%;
      height: 75%;
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: all .1s;
      text-align: center;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      &:active {
        transform: translateY(-50%) scale(0.75);
        transition: all .05s linear;
      }
      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        font-family: 'FontAwesome';
      }
    }
  } 
  
  .no {
    left: 38px;
    .trigger:before {
      content: "\f00d";
      font-size: 28px;
      color: #c33;
    }
  }
  
  .yes {
    right: 38px;
    .trigger:before {
      content: "\f004";
      font-size: 22px;
      color: #3b7;
    }
  }
  
  .info {
    left: calc(50% - 23px);
    top: 17px;
    height: 46px;
    width: 46px;
    .trigger {
      width: 65%;
      height: 65%;
      &:before {
        content: "\f05a";
        font-size: 16px;
        color: #3498db;
      }
    }
  }
}
</style>

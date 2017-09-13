<template>
    <div class="card_over_ray">
      <div>
          <div class="matching-message"><h2>マッチング成立しました！</h2></div>
          <div class="matching-message">おめでとうございます</div>
      </div>
      <div 
        class="next-button" 
        v-on:click="continueSwiping"
      >
          <span>続ける</span>
      </div>
    </div>
</template>

<script>
import eventHub from '../shared/EventHub'

export default {
  name: 'matching-overlay',
  components: {
  },
  mounted () {
  },
  methods: {
    continueSwiping: function () {
      eventHub.$emit('continue-swiping')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .matching-message {
    color: #fff;
  }

  .next-button {
    color: #fff;
    border: 1px solid #fff;
    width: 235px;
    margin: 100px auto;
    border-radius: 40px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }
</style>

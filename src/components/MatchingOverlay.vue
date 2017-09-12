<template>
    <div 
      class="card_over_ray"
    >
      <div class="card_over_ray_title">
          <div class="fnt24 fnt_white01 mb15">マッチング成立しました！</div>
          <div class="fnt14 fnt_white01">おめでとうございます</div>
      </div>
      <div class="card_over_ray_button">
        <div class="pairs_button_text">
            メッセージを送る
        </div>
      </div>
      <div 
        class="pairs_button_text" 
        v-on:click="continueSwiping">
          続ける
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
</style>

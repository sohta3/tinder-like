<template>
  <div>
    <div class="cards">
      <card
        v-for="partner in partners"
        v-bind:partner="partner"
        v-bind:key="partner.id"
      >
      </card>
    </div>

    <buttoncontainer 
      v-bind:isShow="hasActivePartners()"
    ></buttoncontainer>

    <matchingoverlay v-if="isShowMatchingOverlay"></matchingoverlay>
    
    <h1 class="empty-message"
      v-if="!hasActivePartners()"
    >
      カードがありません
    </h1>

  </div>
</template>

<script>
import eventHub from '../shared/EventHub'
import card from './Card'
import buttoncontainer from './ButtonContainer'
import matchingoverlay from './MatchingOverlay'

export default {
  name: 'card-list',
  components: {
    card,
    buttoncontainer,
    matchingoverlay
  },
  mounted () {
    console.log('mounted')

    const showOverlay = this.showOverlay
    const goToNextPartner = this.goToNextPartner

    eventHub.$on('like', showOverlay)

    eventHub.$on('nope', goToNextPartner)

    eventHub.$on('continue-swiping', goToNextPartner)
  },
  methods: {
    hasActivePartners: function () {
      return this.$data.partners.some((partner) => {
        return partner.isActive === true
      })
    },
    goToNextPartner: function () {
      const activePartners = this.$data.partners.filter((partner) => {
        return partner.isActive === true
      })
      activePartners[0].isActive = false
      this.hideOverlay()
    },
    showOverlay: function () {
      this.$data.isShowMatchingOverlay = true
    },
    hideOverlay: function () {
      this.$data.isShowMatchingOverlay = false
    }
  },
  data: function () {
    return {
      partners: [
        {
          id: 1,
          name: 'Linda',
          age: 25,
          residence: '東京',
          tweet: 'はじめまして!',
          img: 'https://i.imgur.com/QZuGC10.jpg',
          isActive: true
        },
        {
          id: 2,
          name: 'Lisa',
          age: 20,
          residence: '大阪',
          tweet: 'こにゃにゃちわ',
          img: 'https://i.imgur.com/1EWwp59.jpg',
          isActive: true
        },
        {
          id: 3,
          name: 'Sandra',
          age: 18,
          residence: '京都',
          tweet: 'ぴょんぴょんするんじゃあ',
          img: 'https://i.imgur.com/Lu3laIj.jpg',
          isActive: true
        }
        /*
        {
          id: 4,
          name: 'Chloe',
          age: 18,
          img: 'https://i.imgur.com/WgYIxhw.png',
          isActive: true
        }
        {
          id: 5,
          name: 'Alexa',
          age: 23,
          img: 'https://i.imgur.com/D0PQegY.png',
          isActive: true
        },
        {
          id: 6,
          name: 'Maria',
          age: 21,
          img: 'https://i.imgur.com/eqd5IhH.jpg',
          isActive: true
        },
        {
          id: 7,
          name: 'Emma',
          age: 24,
          img: 'https://i.imgur.com/4F9NXPo.png',
          isActive: true
        },
        {
          id: 8,
          name: 'Sara',
          age: 18,
          img: 'http://i40.tinypic.com/ofxe21.jpg',
          isActive: true
        },
        {
          id: 9,
          name: 'Lara',
          age: 22,
          img: 'https://i.imgur.com/HMkdN6A.jpg',
          isActive: true
        }
        */
      ],
      isShowMatchingOverlay: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .cards {
    position: relative;
    margin: 0 auto;
    width: 80%;
  }

  .card_over_ray {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    margin: 0 auto;
    padding: 100px 0 0;
    background-color: rgba(244, 141, 151, .9);
  }
  
  .empty-message {
    padding-top: 100px;
    color: #788086;
  }
</style>

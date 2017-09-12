<template>
  <div>
    <div id="people">
      <card
        v-for="partner in partners"
        v-bind:partner="partner"
        v-bind:key="partner.id"
      >
      </card>
    </div>
    <buttoncontainer></buttoncontainer>
  </div>
</template>

<script>
import eventHub from '../shared/EventHub'
import card from './Card'
import buttoncontainer from './ButtonContainer'

export default {
  name: 'card-list',
  components: {
    card,
    buttoncontainer
  },
  mounted () {
    console.log('mounted')
    eventHub.$on('like', function (name) {
      console.log('like received')
      console.log(this.$data)
    })
    eventHub.$on('nope', function (name) {
      console.log('nope received')
    })
  },
  data: function () {
    return {
      partners: [
        {
          id: 1,
          name: 'Linda',
          age: 25,
          img: 'https://i.imgur.com/QZuGC10.jpg',
          isActive: true
        },
        {
          id: 2,
          name: 'Lisa',
          age: 20,
          img: 'https://i.imgur.com/1EWwp59.jpg',
          isActive: true
        },
        {
          id: 3,
          name: 'Sandra',
          age: 18,
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #people {
    position: relative;
    margin: 0 auto;
    width: 80%;
  }
</style>

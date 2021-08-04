<template>
  <div>
    <!-- <h1>All Users({{ $store.state.allUsers.length }})</h1> -->
    <h1>All Users: {{ $store.getters.allUsersCount }}</h1>
    <h3>Seoul Users: {{ countOfSeoul }}({{ percentOfSeoul }}%)</h3><!-- mapGetters 사용 -->
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in allUsers /* in $store.state.allUsers */"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        allUsers: 'allUsers'
      }),
      // ...mapGetters({
      //   allUsersCount: 'allUsersCount',
      //   countOfSeoul: 'countOfSeoul',
      //   percentOfSeoul: 'percentOfSeoul',
      // }),
      ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul']),
    },
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    },
  }
</script>

<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: 뷰제이에스</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    {{ helloToMixin }}
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        >
        </UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
          >
        </UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'
  import { dateFormat } from '../mixins/dateFormat'

  export default {
    components:{
      UserDetail,
      UserEdit
    },
    data() {
      return {
        name: 'Owen',
        address: 'Suwon',
        phone: '1234-5678',
        hasDog: true,
        createdAt: null,
      }
    },
    computed: {
      helloToMixin() {
        return this.mixinData + "안녕하시오!"
      }
    },
    created() {
      console.log('부모(유저 컴포넌트) 렌더링')
      this.createdAt = new Date()
    },
    methods: {
      parents(user) {
        this.name = user.name
        this.address = user.address
        this.phone = user.phone
        this.hasDog = user.hasDog
      },
      getDateAndTime(date) { // 나중에 렌더링...화면에는 이게 반영된다.
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        return `${hours}:${minutes}`
      },
    },
    mixins: [dateFormat],
  }
</script>
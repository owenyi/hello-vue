import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://image.flaticon.com/icons/png/512/4149/4149068.png'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://image.flaticon.com/icons/png/512/4149/4149097.png'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://image.flaticon.com/icons/png/512/4149/4149079.png'}
    ]
  },
  getters: { // computed
    allUsersCount(state) {
      return state.allUsers.length
    },
    countOfSeoul(state) {
      let count = 0
      state.allUsers.forEach(user => {
        if (user.address === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul(state, getters) { // getters만 써도 state 꼭 써줘야 함
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }
  },
  mutations: {
    addUsers(state, payload) {
      state.allUsers.push(payload)
    }
  },
  actions: {

  }
})

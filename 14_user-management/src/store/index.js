import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: 'owen', email: 'owen@gmail.com', password: '123456' },
      { id: 2, name: 'hoza', email: 'hoza@gmail.com', password: '123456' },
    ],
    isLogin: false,
  },
  mutations: {
    loginSuccess(state, signObject) {
      console.log(signObject)
      state.isLogin = true
    },
  },
  actions: {
    signIn(context, signObject) {
      // console.log(signObject)
      
      let selectedUser = null
      context.state.allUsers.forEach(user => {
        if (user.email === signObject.email) {
          selectedUser = user
        }
      })

      if (selectedUser === null || selectedUser.password !== signObject.password) {
        context.state.isLogin = false
        return true
      } else {
        alert('로그인이 완료됐습니다.')
        context.state.isLogin = true
        context.commit("loginSuccess", signObject)
        return false
      }
    },
  },
  modules: {},
})

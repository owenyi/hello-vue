<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert
          class="mb-3"
          color="red"
          type="error"
          :value="isError"
        >아이디와 비밀번호를 확인해주세요.</v-alert>
        <v-alert
          class="mb-3"
          color="green"
          type="success"
          :value="isLogin"
        >로그인이 완료되었습니다.</v-alert>
        <v-card>
          <v-toolbar flat color="#E0E0E0">
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field 
              v-model="email" 
              label="이메일을 입력하세요"
              ref="email"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
              ref="password"
            >
            </v-text-field>
            <v-btn
              color="primary"
              depressed
              block
              large
              @click="login"
            >로그인</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data() {
    return {
      email: null,
      password: null,
      isError: false,
    }
  },
  computed: {
    ...mapState(['isLogin']),
  },
  methods: {
    ...mapActions(['signIn']),
    login() {

      // alert(this.email + ' ' + this.password)

      this.signIn({ email: this.email, password: this.password })
        .then((flag) => {
          this.isError = flag
          if (!flag) {
            this.email = null
            this.password = null
          }
        })

      // if (this.email === null) {
      //   alert('이메일을 입력하세요.')
      //   this.$refs.email.focus()
      //   return
      // } else if (this.password === null) {
      //   alert('비밀번호 입력하세요.')
      //   this.$refs.password.focus()
      //   return
      // }

      // let selectedUser = null
      // this.allUsers.forEach(user => {
      //   if (user.email === this.email) {
      //     selectedUser = user
      //   }
      // })

      // if (selectedUser === null || selectedUser.password !== this.password) {
      //   this.isError = true
      //   this.isSuccess = false
      // } else {
      //   alert('로그인이 완료됐습니다.')
      //   this.email = null
      //   this.password = null
      //   this.isError = false
      //   this.isSuccess = true
      // }
    }
  }
}
</script>

<style></style>

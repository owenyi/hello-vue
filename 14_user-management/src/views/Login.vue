<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert
          class="mb-3"
          color="red"
          type="error"
          :value="true"
        >아이디와 비밀번호를 확인해주세요.</v-alert>
        <v-alert
          class="mb-3"
          color="green"
          type="success"
          :value="isSuccess"
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
export default {
  data() {
    return {
      email: null,
      password: null,
      allUsers: [
        { id: 1, name: 'owen', email: 'owen@gmail.com', password: '123456' },
        { id: 2, name: 'hoza', email: 'hoza@gmail.com', password: '123456' },
      ],
      isError: false,
      isSuccess: false,
    }
  },
  methods: {
    login() {

      // alert(this.email + ' ' + this.password)

      if (this.email === null) {
        alert('이메일을 입력하세요.')
        this.$refs.email.focus()
        return
      } else if (this.password === null) {
        alert('비밀번호 입력하세요.')
        this.$refs.password.focus()
        return
      }

      let selectedUser = null
      this.allUsers.forEach(user => {
        if (user.email === this.email) {
          selectedUser = user
        }
      })

      // if (selectedUser === null) alert('잘못된 이메일입니다.')
      // else if (selectedUser.password !== this.password) alert('잘못된 비밀번호입니다.')
      if (selectedUser === null || selectedUser.password !== this.password) {
        this.isError = true
      } else {
        alert('로그인이 완료됐습니다.')
        this.email = null
        this.password = null
        this.isError = false
        this.isSuccess = true
      }
    }
  }
}
</script>

<style></style>

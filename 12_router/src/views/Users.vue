<template>
  <div>
    <h1>Users</h1>
    <h2>params</h2>
    <p>이 유저는 현재 유저 번호가 {{ userId }}입니다.</p>
    <p>{{ $route.params.name }}</p>
    <h2>query</h2>
    <p>그룹 : {{ $route.query.group }}</p>
    <p>카테고리 : {{ $route.query.category }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    created() {
      console.log("router", this.$router)
      console.log("route", this.$route)
    }
  }
</script>

<style>

</style>
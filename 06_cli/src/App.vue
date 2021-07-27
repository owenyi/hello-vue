<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
    <home-component></home-component>
    <app-status></app-status>
  </div>
</template>

<script>
import HomeComponent from './Home'

export default {
  components: {
    HomeComponent,
  },
  data() {
    return {
      title: "안녕하세요.",
      count: 1,
    }
  },
}
</script>

<style>

</style>
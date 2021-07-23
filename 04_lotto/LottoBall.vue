<template>
  <div class="ball" v-bind:style="styleObject">{{number}}</div>
</template>

<script>
export default {
  name: 'LottoBall', // 안 써줘도 똑같음
  props: {
    number: Number,
  },
  data() {
    return {
        
    };
  },
  computed: {
    styleObject() {
      let background;
      if (this.number <= 10) {
        background = 'red';
      } else if (this.number <= 20) {
        background = 'orange';
      } else if (this.number <= 30) {
        background = 'yellow';
      } else if (this.number <= 40) {
        background = 'blue';
      } else {
        background = 'green';
      }
      return {
          background,
      };
    }
  },
}
</script>

<style>
  .ball {
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-right: 20px;
  }
</style>
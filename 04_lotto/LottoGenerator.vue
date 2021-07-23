<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" v-bind:key="ball" v-bind:number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" v-bind:number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한 번 더!</button>
  </div>
</template>

<script>
  import LottoBall from './LottoBall';

  function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }

  const timeouts = [];

  export default {
    components: {
      // 'lotto-ball': LottoBall,
      LottoBall, // key(kebab) - value(pascal) 호환되면 key 생략 가능
    },
    data() {
      return {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
      }
    },
    computed: {

    },
    methods: {
      showBalls() {
        for (let i = 0; i < this.winNumbers.length - 1; i ++) {
          timeouts[i] = setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 1000);
        }
        timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 7000);
      },
      onClickRedo() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
        // this.showBalls(); // watch로 보냈음
      },
    },
    mounted() {
      console.log('mounted');
      this.showBalls();
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      timeouts.forEach((t) => {
        clearTimeout(t);
      })
      clearInterval(interval);
    },
    watch: { // 웬만하면 쓰지 말자
      winBalls(val, oldVal) {
        if (val.length === 0) {
          this.showBalls();
        }
      }
    },
  };
</script>

<style scoped>
  
</style>
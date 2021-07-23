<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('rock')">Rock</button>
      <button @click="onClickButton('paper')">Paper</button>
      <button @click="onClickButton('scissors')">Scissors</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>

<script>
  const rpsCoords = {
    rock: '0',
    paper: '-284px',
    scissors: '-142px',
  };

  const scores = {
    rock: 0,
    paper: -1,
    scissors: 1,
  }

  const computerChoice = (imgCoord) => {
    return Object.entries(rpsCoords).find(function(v) {
      return v[1] === imgCoord;
    })[0];
  }

  let interval = null;

  export default {
    data() {
      return {
        imgCoord: rpsCoords.rock,
        result: '',
        score: 0,
      }
    },
    computed: {
        computedStyleObject() {
          return {
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
          };
        }
    },
    methods: {
      changeHand() {
        interval = setInterval(() => {
          if (this.imgCoord === rpsCoords.rock) {
            this.imgCoord = rpsCoords.scissors;
          } else if (this.imgCoord === rpsCoords.scissors) {
            this.imgCoord = rpsCoords.paper;
          } else if (this.imgCoord === rpsCoords.paper) {
            this.imgCoord = rpsCoords.rock;
          }
        }, 100);
      },
      onClickButton(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCoord)];
        console.log(myScore);
        console.log(cpuScore);
        const diff = myScore - cpuScore;
        if (diff === 0) {
          this.result = '비겼습니다.';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다.';
          this.score += 1;
        } else {
          this.result = '졌습니다.';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        }, 1000);
      }
    },
    created() {
      console.log('created');
    },
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      clearInterval(interval);
    },
    destroyed() {
      console.log('destroyed');
    },
  };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>
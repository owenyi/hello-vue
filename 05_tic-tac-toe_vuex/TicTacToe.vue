<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(cellData, rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
      </tr>
    </table>
    <div v-if="winner">{{turnMessage}}</div>
    <!-- <div v-if="winner">{{winner}}님의 승리!</div> -->
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import store, { CLICK_CELL, SET_WINNER, CHANGE_TURN, RESET_GAME, NO_WINNER } from './store';
  import TableComponent from './TableComponent';

  export default {
    store,
    components: {
      TableComponent,
    },
    computed: {
      ...mapState(['winner', 'turn', 'tableData']),
      ...mapGetters(['turnMessage']),
      // winner() {
      //   return this.$store.state.winner;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // },
      // turnMessage() {
      //   return this.$store.getters.turnMessage;
      // },
    },
    methods: {
      onClickTd(cellData, rowIndex, cellIndex) {
        if (cellData) return;

        this.$store.commit(CLICK_CELL, { rowIndex: rowIndex, cellIndex: cellIndex });

        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }

        if (win) { // 이긴 경우: 3줄 달성
          this.$store.commit(SET_WINNER, this.turn);
          this.$store.commit(RESET_GAME);
        } else { // 무승부
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            this.$store.commit(NO_WINNER);
            this.$store.commit(RESET_GAME);
          } else {
            this.$store.commit(CHANGE_TURN);
          }
        }
      }
    },
    beforeDestroy() {
      
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>
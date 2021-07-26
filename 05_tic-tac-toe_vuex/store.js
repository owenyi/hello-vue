import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Vue와 Vuex 연결

export const SET_WINNER = 'SET_WINNER'; // import { SET_WINNER, CLICK_CELL, ... } from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({ // import store from './store';
  state: {
    tableData: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    turn: 'O',
    winner: '',
  }, // vue의 data와 비슷
  getters: {
    turnMessage(state) {
      return state.winner + '님의 승리!';
    },
  }, // vue의 computed와 비슷
  mutations: {
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, { rowIndex, cellIndex }) {
      Vue.set(state.tableData[rowIndex], cellIndex, state.turn);
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    [RESET_GAME](state) {
      state.turn = 'O';
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    },
    [NO_WINNER](state) {
      state.winner = '';
    },
  }, // state를 수정할 때 사용...동기적으로
  actions: {

  }, // 비동기를 사용할 때, 또는 여러 뮤테이션을 연달아 실행할 때
});
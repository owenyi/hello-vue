import Vue from "vue";
// 확장자 빼도 됨...webpack.config.js의 resolve.extensions에 적어둬서
import NumberBaseball from './NumberBaseball'; 

new Vue(NumberBaseball).$mount('#root');
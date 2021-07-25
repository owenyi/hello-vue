<template>
  <tr>
	  <td-component v-for="(cellData, cellIndex) in rowData" :cell-data="cellData" :cell-index="cellIndex" :row-index="rowIndex" :key="cellIndex"></td-component>
  </tr>
</template>

<script>
  import TdComponent from './TdComponent';

  export default {
    components: {
      TdComponent,
    },
    props: {
      rowData: Array,
      rowIndex: Number,
    },
    data() {
      return {
        parentData: '내가 니 애비다.'
      }
    }
  }
</script>

<style>

</style>
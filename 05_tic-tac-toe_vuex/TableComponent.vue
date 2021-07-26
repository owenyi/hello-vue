<template>
  <table>
      <tr-component v-for="(rowData, rowIndex) in tableData" :row-index="rowIndex" :key="rowIndex"></tr-component>
  </table>
</template>

<script>
  import TrComponent from './TrComponent';

  export default {
    components: {
      TrComponent,
    },
    computed: {
      tableData() {
        return this.$store.state.tableData;
      }
    },
  }
</script>

<style>

</style>
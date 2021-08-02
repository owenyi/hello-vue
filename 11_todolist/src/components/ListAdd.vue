<template>
  <div>
    <v-textarea
      outlined
      v-model="memo"
      label="투두리스트를 입력해주세요."
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
    <v-btn v-if="mode === 'add'" @click="listAdd">리스트 추가</v-btn>
    <v-btn v-if="mode === 'edit'" @click="listEdit">리스트 수정</v-btn>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    data() {
      return {
        memo: null,
        index: null,
        mode: 'add',
      }
    },
    methods: {
      listAdd() {
        // console.log('리스트 추가')
        if (this.memo === null) {
          alert('할 일을 입력해주세요.')
        } else {
          this.$emit('listAdd', this.memo)
          this.memo = null
        }
      },
      listEdit() {
        if (this.memo === null) {
          alert('할 일을 입력해주세요.')
        } else {
          this.$emit('listEdit', this.memo, this.index)
          this.memo = null
          this.mode = 'add'
        }
      },
    },
    created() {
      eventBus.$on('listEdit', (memo, index) => {
        // console.log(memo, index)
        this.memo = memo
        this.index = index
        this.mode = 'edit'
      })
    },
  }
</script>

<style>

</style>
export const dateFormat = {
  data() {
    return {
      mixinData: '나는 믹스인이오!'
    }
  },
  created() {
    console.log('믹스인 렌더링')
  },
  methods: {
    getDateAndTime(date) {
      if (date !== null) {
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        return `${fullDate} ${hours}:${minutes}`
      }
      return null
    },
  }
}
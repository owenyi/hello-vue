export const userFormat = {
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
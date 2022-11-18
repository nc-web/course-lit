
export const hourSet = (date) => {
  const dateTemp = new Date(date)
  const hour = dateTemp.getHours()
  const minutes = dateTemp.getMinutes()
  const seconds = dateTemp.getSeconds()

  const hourMinutSecons = `${hour}:${minutes}::${seconds}`

  return hourMinutSecons
}

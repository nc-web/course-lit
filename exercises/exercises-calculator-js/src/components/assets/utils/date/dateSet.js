
// Hooks Date Get Format Name Spanish
export const dateSetFormat = (dateExt) => {
  const dateTemp = new Date(dateExt)
  const date = dateTemp.getDate()
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  const dateFormat = `${date}-${month}-${year}`

  return dateFormat
}

// Hooks Date Get Format Name Spanish
export const dateSetFormatNameES = (dateExt) => {
  const dateTemp = new Date(dateExt)
  const day = dateTemp.getDay()
  const date = dateTemp.getDate()
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  // Dias
  const spanishDays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]

  const nameDay = spanishDays[day]

  // Meses
  const spanishMonths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  const nameMonth = spanishMonths[month]

  // const dateFormat = `${year}-${month}-${date}`
  const dateFormatNameES = `${nameDay} ${date} ${nameMonth} ${year}`
  // const dateFormat3 = String(year + '-' + month + '-' + date)

  return dateFormatNameES
}

// Hooks Date Get Format Name Spanish
export const dateSetFormatNameDayPlusES = (dateExt) => {
  const dateTemp = new Date(dateExt)
  const day = dateTemp.getDay() + 1
  const date = dateTemp.getDate() + 1
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  // Dias
  const spanishDays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]

  const nameDay = spanishDays[day]

  // Meses
  const spanishMonths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  const nameMonth = spanishMonths[month]

  // const dateFormat = `${year}-${month}-${date}`
  const dateFormatNameES = `${nameDay} ${date} ${nameMonth} ${year}`
  // const dateFormat3 = String(year + '-' + month + '-' + date)

  return dateFormatNameES
}

// Hooks Date Get Format Name English
export const dateSetFormatNameEN = (dateExt) => {
  const dateTemp = new Date(dateExt)
  const day = dateTemp.getDay()
  const date = dateTemp.getDate()
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  // Dias
  /*
  const englishDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  */

  // const nameDay = englishDays[day]

  // Meses
  const englishMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const nameMonth = englishMonths[month]

  // const dateFormat = `${year}-${month}-${date}`
  const dateFormatNameEN = `${day} ${date} ${nameMonth} ${year}`
  // const dateFormat3 = String(year + '-' + month + '-' + dateFormatNameEN)

  return dateFormatNameEN
}

// Hooks Date Get Format Name English
export const dateSetFormatNameDayPlusEN = (dateExt) => {
  const dateTemp = new Date(dateExt)
  const day = dateTemp.getDay() + 1
  const date = dateTemp.getDate() + 1
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  // Dias
  /*
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]
  */

  // const nameDay = dias[day]

  // Meses
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  const nameMonth = meses[month]

  // const dateFormat = `${year}-${month}-${date}`
  const dateFormatNameEN = `${day} ${date} ${nameMonth} ${year}`
  // const dateFormat3 = String(year + '-' + month + '-' + date)

  return dateFormatNameEN
}

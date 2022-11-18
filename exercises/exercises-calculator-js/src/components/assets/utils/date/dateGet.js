
// Hooks Date Get Format Name Spanish
export const dateGetFormat = () => {
  const dateTemp = new Date()
  const date = dateTemp.getDate()
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  const dateFormat = `${date}-${month}-${year}`

  return dateFormat
}

// Hooks Date Get Format Name Spanish
export const dateGetFormatNameES = () => {
  const dateTemp = new Date()
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
export const dateGetFormatNameDayPlusES = () => {
  const dateTemp = new Date()
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

// Hooks Date Get Format Name English
export const dateGetFormatNameEN = () => {
  const dateTemp = new Date()
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
export const dateGetFormatNameDayPlusEN = () => {
  const dateTemp = new Date()
  const day = dateTemp.getDay()
  const date = dateTemp.getDate()
  const month = dateTemp.getMonth()
  const year = dateTemp.getFullYear()

  /*
  // Dias
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

export const dateGetDayES = () => {
  // Fecha
  const newDate = new Date()
  // const date = newDate.getDate()
  // const month = newDate.getMonth()
  // const year = newDate.getFullYear()

  // Dia de la semana en español
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]

  const numeroDia = new Date(newDate).getDay()
  const nombreDia = dias[numeroDia]

  // Return con fecha en numeros
  // return `${date}${separator} ${month<10?`0${month}`:`${month}`}${separator}${year}`

  // Return con dia en nombre y fecha en numeros
  // return `${nombreDia} ${date}${separator} ${month<10?`0${month}`:`${month}`}${separator}${year}`

  // Return con dia en nombre y mes en nombre
  return `${nombreDia}`
}


import { useState, useEffect } from 'react'

export const hourGet = () => {
  const dateTemp = new Date()
  const hour = dateTemp.getHours()
  const minutes = dateTemp.getMinutes()
  const seconds = dateTemp.getSeconds()

  const hourMinutSecons = `${hour}:${minutes}::${seconds}`

  return hourMinutSecons
}

export const hourGetInterval = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return dateTime.toLocaleTimeString()
}

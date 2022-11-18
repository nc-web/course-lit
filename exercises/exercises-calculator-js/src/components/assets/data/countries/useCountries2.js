
import { useState } from 'react'

export const useCountries2 = () => {
  const [dataCountries2, setDataCountries2] = useState([])
  // const [nameCountries, setNameCountries] = useState([])
  const [loading, setLoading] = useState(false)

  const headers = new Headers()
  headers.append('X-CSCAPI-KEY', 'Q2dYSGlBdm04N2FqOHhpTmJVVTduU29Cd3hWMGNhaG9nYUNUcEt6Rw==')

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow'
  }

  setLoading(true)
  fetch('https://api.countrystatecity.in/v1/countries/IN', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .then((dataApi) => setDataCountries2(dataApi))
    .catch((error) => console.log('error', error))
    .finally(() => {
      setLoading(false)
    })

  console.log(dataCountries2)

  if (loading) {
    return <p> Data is loading... </p>
  } else {
    return [dataCountries2]
  }
}

// Libreria de Cambio de Divisas
import currency from 'currency.js'

const formatCurrency = (formatData) => {

  let formatOptions = {}
  switch (formatData.regionSelectedCode) {

  case 'us':
    formatOptions = {
      symbol: '$',
      pattern: '!#',
      separator: ',',
      decimal: '.'
    }
    break
  case 'cop':
    formatOptions = {
      symbol: '$',
      pattern: '!#',
      separator: ',',
      decimal: '.'
    }
    break
  case 'jp':
    formatOptions = {
      symbol: '¥',
      pattern: '!#',
      separator: ',',
      decimal: '.'
    }
    break
  case 'cn':
    formatOptions = {
      symbol: '¥',
      pattern: '!#',
      separator: ',',
      decimal: '.'
    }
    break
  case 'eu':
  default:
    formatOptions = {
      symbol: '€',
      pattern: '# !',
      separator: '.',
      decimal: ','
    }
    break

  }

  const formattedValue = currency(formatData.value, formatOptions).format()
  return formattedValue

}

export default formatCurrency

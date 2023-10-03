// Define las tasas de cambio
const exchangeRates = {
  us: 1,      // Tasa de cambio de dólar a sí mismo (1 USD = 1 USD)
  cop: 4194.89, // Tasa de cambio de dólar a pesos colombianos
  eu: 0.85,   // Tasa de cambio de dólar a euro (1 USD = 0.85 EUR)
  jp: 110.63, // Tasa de cambio de dólar a yen (1 USD = 110.63 JPY)
  cn: 6.45,   // Tasa de cambio de dólar a yuan (1 USD = 6.45 CNY)
};

// Función para convertir moneda
export function convertCurrency(amount, fromCurrency, toCurrency) {
  if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return amount * exchangeRate;
  } else {
    throw new Error("Tasas de cambio no definidas para las monedas especificadas.");
  }
}

// Función para formatear moneda
export function formatCurrency(value, currencyCode) {
  let currencySymbol;

  // Asigna el símbolo de moneda correspondiente según el código de moneda
  switch (currencyCode) {
    case "us":{
      currencySymbol = "$";
      
    }
      break;
    case "cop":
      currencySymbol = "COP";
      break;
    case "eu":
      currencySymbol = "€";
      break;
    case "jp":
      currencySymbol = "¥";
      break;
    case "cn":
      currencySymbol = "¥";
      break;
    default:
      currencySymbol = "";
      break;
  }

  // Formatea el valor con el símbolo de moneda
  return `${currencySymbol} ${value}`;
}

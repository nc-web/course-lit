
import currency from "currency.js";
import formatCurrency from "./currency";

const exchangeRates = {
  us: 1,      // Tasa de cambio de dólar a sí mismo (1 USD = 1 USD)
  cop: 4194.89, // Tasa de cambio de dólar a pesos colombianos
  eu: 0.85,   // Tasa de cambio de dólar a euro (1 USD = 0.85 EUR)
  jp: 110.63, // Tasa de cambio de dólar a yen (1 USD = 110.63 JPY)
  cn: 6.45,   // Tasa de cambio de dólar a yuan (1 USD = 6.45 CNY)
};

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedAmount = currency(amount).multiply(exchangeRate).value;
    return convertedAmount;
  } else {
    throw new Error("Tasas de cambio no definidas para las monedas especificadas.");
  }
};

export { formatCurrency, convertCurrency };

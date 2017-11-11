const buildHistoMinuteUrl = (fromCurrency = 'USD', toCurrency = 'BTC', rangeOfExtraction = 60, toTimestamp) => {
  const toTimestampFixed = toTimestamp || new Date().getTime(); 
  return `https://min-api.cryptocompare.com/data/histominute?fsym=${fromCurrency}&tsym=${toCurrency}&limit=${rangeOfExtraction}&aggregate=1&toTs=${toTimestampFixed}&extraParams=walmart-test`;
}

module.exports = {
  buildHistoMinuteUrl
}
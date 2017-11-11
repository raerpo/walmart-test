const { URL } = require('url'); 
const axios = require('axios');
const { buildHistoMinuteUrl } = require('../utils');

const getCurrenciesData = (req, res) => {
  const RANGE_OF_EXTRACTION = 60;
  const ORIGIN_CURRENCY = 'USD';
  const CURRENCIES = ['ETH', 'BTC', 'DASH'];
  const CURRENT_TIMESTAMP = new Date().getTime();

  const APIUrls = CURRENCIES.map(currency => {
    return buildHistoMinuteUrl(ORIGIN_CURRENCY, currency, RANGE_OF_EXTRACTION, CURRENT_TIMESTAMP);
  });
  const APICalls = APIUrls.map(url => axios.get(url));
  axios.all(APICalls)
    .then(axios.spread((...args) => {
      const completeData = [];
      args.map(response => {
        // The API doesn't return the requested currency in the response
        // That's why we need to include in a modified response from the API
        const requestURL = new URL(response.config.url);
        const responseCurrency = requestURL.searchParams.get('tsym');
        completeData.push(
          Object.assign({}, {currency: responseCurrency}, response.data)
        ); 
      });
      res.json(completeData);
    }));
}

module.exports = {
  getCurrenciesData
}
const Hapi = require('hapi');
const db = require('./database');
const fetch = require('node-fetch');
const axios = require('axios');
// const CriptoCurrencySnapshot = require('./models/CriptoCurrencySnapshot');
const getTimeStamps = require('./utils/getTimeStamps');

const server = new Hapi.Server();
server.connection({
  port: '8080'
});



// === Handlers
// clientHandler reply with the React application
const clientHandler = (request, reply) => {

}
// getDataFromServer retrieves the historic data from server 
const getDataFromServer = () => {
  const timeStamps = getTimeStamps();
  const APIUrls = timeStamps.map(timestamp => {
    return `https://min-api.cryptocompare.com/data/pricehistorical?fsym=USD&tsyms=ETH,BTC,DASH&ts=${timestamp}&extraParams=walmart-test`;
  });
  const APICalls = APIUrls.map(url => axios.get(url));
  axios.all(APICalls)
  .then(axios.spread((...args) => {
    args.map(res => {console.log(res.data)})
  }));
}
// we need to save the data that we get from the API to avoid unnecessary
// calls to the API
const saveData = () => {

}

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: (request, reply) => {
    getDataFromServer();
    return reply('hello world from Hapi');
  }
});

server.start((err) => {
  if(err) {
    throw err;
  }
  console.log(`The test are running at ${server.info.uri}`);
})
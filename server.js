const express = require('express');
const path = require('path');
const cors = require('cors');
const { serverPort } = require('./config');
// const db = require('./database');
// const CriptoCurrencySnapshot = require('./models/CriptoCurrencySnapshot');
const { getCurrenciesData } = require('./controllers');
const server = express();
server.use(cors());

server.use(express.static(path.resolve(__dirname, 'build')));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.get('/getCurrencies', getCurrenciesData);

server.listen(process.env.port || serverPort);
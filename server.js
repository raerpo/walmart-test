const express = require('express');
const path = require('path');
// const db = require('./database');
// const CriptoCurrencySnapshot = require('./models/CriptoCurrencySnapshot');
const { getCurrenciesData } = require('./controllers');
const server = express();

server.use(express.static(path.resolve(__dirname, 'build')));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.get('/getCurrencies', getCurrenciesData);

server.listen(process.env.port || 8080);
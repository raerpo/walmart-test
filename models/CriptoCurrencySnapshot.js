const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const CriptoCurrencySnapshot = new Schema({
  timestamp: String,
  ETH: String,
  BTC: String,
  DASH: String
});

module.exports = Mongoose.model('CriptoCurrencySnapshot');
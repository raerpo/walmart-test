const Mongoose = require('mongoose');

const CriptoCurrencySnapshotSchema = new Mongoose.Schema({
  timestamp: String,
  ETH: String,
  BTC: String,
  DASH: String
});

module.exports = Mongoose.model('CriptoCurrencySnapshot', CriptoCurrencySnapshotSchema);
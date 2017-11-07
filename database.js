var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/walmart-test/');
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connected with database!');
});

module.exports = db;
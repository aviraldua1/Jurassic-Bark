const mongoose = require('mongoose');
var logSchema = mongoose.Schema({
    url: String,
    breed: String
});

var Logs = mongoose.model('Logs',logSchema)

module.exports = Logs
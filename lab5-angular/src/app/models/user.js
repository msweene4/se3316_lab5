var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ASchema   = new Schema({
    Email: String,
    Password: String
});

module.exports = mongoose.model('temp', ASchema);
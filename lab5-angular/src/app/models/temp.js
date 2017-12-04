var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ASchema   = new Schema({
    Email: String,
    Password: String,
    GENERATED_VERIFYING_URL: String,
});

module.exports = mongoose.model('temp', ASchema);
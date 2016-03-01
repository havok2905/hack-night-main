var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MySchema = new Schema({

});

module.exports = mongoose.model('my-schema', MySchema);

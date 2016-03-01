var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var JobSchema = new Schema({
  name:       { type: String,   required: true },
  html:       { type: Number,   required: true },
  css:        { type: Number,   required: true },
  javascript: { type: Number,   required: true },
  php:        { type: Number,   required: true },
  ruby:       { type: Number,   required: true },
  java:       { type: Number,   required: true },
  c:          { type: Number,   required: true },
  python:     { type: Number,   required: true }
});

module.exports = mongoose.model('my-schema', MySchema);

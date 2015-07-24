'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var birdSchema = new Schema({
  birdname: String,
  birdcolor: String,
  sightingDate: String
});

module.exports = mongoose.model('Bird', birdSchema, 'birds');

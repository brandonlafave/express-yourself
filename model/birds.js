'use strict'

var mongoose = require('mongoose');
var birdSchema = new mongoose.Schema({
  birdname: String,
  birdcolor: String,
  sightingDate: new Date()
});

module.exports = mongoose.model('Bird', birdSchema, '');

'use strict';
var port = 3000;
var mongoose = require('mongoose');
var express = require('express');

var app = express();

var birdRouter = express.Router();

mongoose.connect("mongodb://localhost/express");

app.use(express.static(__dirname + '/public'));

require('./routes/birds')(birdRouter);

app.use('/', birdRouter);

module.exports = app;

//app listener
app.listen(port,function() {
  console.log('Server Running on',port);
});

module.exports = app;

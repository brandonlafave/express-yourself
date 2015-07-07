'use strict';
//application setup
var express = require('express');  //include express.js library
var path = require('path');   //require the path module
var app = express();  //creates express Object for later use
var port = 3000;

//view directory setup
app.set('views', path.join(__dirname, 'views'));
//view engine setup
app.set('view engine', 'jade');

//index get request
app.get('/', function(req, res) {  // '/' is GET route, then callback function for get
  res.render('index');
});

app.get('/about', function(req, res) {  // '/' is GET route, then callback function for get
  res.render('about');
});

app.get('/help', function(req, res) {  // '/' is GET route, then callback function for get
  res.render('help');
});

//static services
app.use(express.static(path.join(__dirname, 'views')));

//app listener
app.listen(port,function() {
  console.log('Server Running on',port);
});

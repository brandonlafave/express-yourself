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
//********************************

// var birds = require('./routes/birds');
//
// //view directory setup
// app.set('public', path.join(__dirname, 'public'));
//
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser());

// // Make our db accessible to our router
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });
//
// app.use('/', routes);
// app.use('/birds', birds);
//
// //index get request
// app.get('/', function(req, res) {  // '/' is GET route, then callback function for get
//   res.render('index');
// });


// app.use('/endpoints', router);

// //application setup
// var express = require('express');  //include express.js library
// var path = require('path');   //require the path module
// var app = express();  //creates express Object for later use
// var bodyParser = require('body-parser');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
//
// var router = express.Router();
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = require('./model/db');
// var bird = require('./model/birds');
//
// var routes = require('./routes/index');

//app listener
app.listen(port,function() {
  console.log('Server Running on',port);
});

module.exports = app;

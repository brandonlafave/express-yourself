'use strict';
//application setup
var express = require('express');  //include express.js library
var path = require('path');   //require the path module
var app = express();  //creates express Object for later use
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var port = 3000;
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db = require('./model/db');
var bird = require('./model/birds');

var routes = require('./routes/index');
var birds = require('./routes/birds');

//view directory setup
app.set('views', path.join(__dirname, 'views'));
//view engine setup
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/birds', birds);

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

app.get('/poems', function(req, res) {  // '/' is GET route, then callback function for get
  res.render('poems');
});

app.use('/endpoints', router);

/* GET Userlist page. */
router.get('/birdlist', function(req, res) {
    var db = req.db;
    var collection = db.get('birdcollection');
    collection.find({},{},function(e,docs){
        res.render('birdlist', {
            "birdlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newbird', function(req, res) {
    res.render('newbird', { title: 'Add New Bird' });
});

//app listener
app.listen(port,function() {
  console.log('Server Running on',port);
});

module.exports = app;

'use strict';
//application setup
var express = require('express');  //include express.js library
var path = require('path');   //require the path module
var app = express();  //creates express Object for later use
var bodyParser = require('body-parser');
var port = 3000;
var router = express.Router();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

app.get('/poems', function(req, res) {  // '/' is GET route, then callback function for get
  res.render('poems');
});


// //static services
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser());

//ROUTES
var birds = ['Flamingo', 'Parrot', 'Bald Eagle', 'Sparrow'];
router.get('/birds', function(req, res) {
    res.json(birds);
    console.log("Get Bird");
});

router.delete('/birds', function(req, res) {
    birds.splice(2,1);
    res.json(birds);
    console.log("Delete Bird");
});

router.post('/birds', function(req, res) {
  res.json(req.body);
  console.log(req.body);
});

router.put('/birds', function(req, res) {
    birds[0] = 'Falcon';
    res.json(birds);
    console.log("Put Bird");
});

// router.post('/birds', function(req, res) {
//     birds[0] = 'Falcon';
//     res.json(birds);
// });

app.use('/endpoints', router);

//app listener
app.listen(port,function() {
  console.log('Server Running on',port);
});

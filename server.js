'use strict';
//application setup
var express = require('express');  //include express.js library
var path = require('path');   //require the path module
var app = express();  //creates express Object for later use
var bodyParser = require('body-parser');
var port = 3000;
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/express');

var routes = require('./routes/index');
// var birds = require('./routes/birds');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
// app.use('/birds', birds);

//view directory setup
app.set('views', path.join(__dirname, 'views'));
//view engine setup
app.set('view engine', 'jade');

//index get request
// app.get('/', function(req, res) {  // '/' is GET route, then callback function for get
//   res.render('index');
// });
//
// app.get('/about', function(req, res) {  // '/' is GET route, then callback function for get
//   res.render('about');
// });
//
// app.get('/help', function(req, res) {  // '/' is GET route, then callback function for get
//   res.render('help');
// });
//
// app.get('/poems', function(req, res) {  // '/' is GET route, then callback function for get
//   res.render('poems');
// });

// //static services
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser());

//ROUTES
// var staticBirds = ['Flamingo', 'Parrot', 'Bald Eagle', 'Sparrow'];
// router.get('/birds', function(req, res) {
//     res.json(staticBirds);
//     console.log("Get Bird");
// });
//
// router.delete('/birds', function(req, res) {
//     staticBirds.splice(2,1);
//     res.json(staticBirds);
//     console.log("Delete Bird");
// });
//
// router.post('/birds', function(req, res) {
//   res.json(req.body);
//   console.log(req.body);
// });
//
// router.put('/birds', function(req, res) {
//     staticBirds[0] = 'Falcon';
//     res.json(staticBirds);
//     console.log("Put Bird");
// });

// router.post('/birds', function(req, res) {
//     birds[0] = 'Falcon';
//     res.json(birds);
// });

app.use('/endpoints', router);

// /// catch 404 and forwarding to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

/// error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

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

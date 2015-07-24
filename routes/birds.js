'use strict'
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser'); //parses information from POST
var Bird = require('../model/birds.js');

module.exports = function(router){
  router.use(bodyParser.json());
  router.get('/birds', function(req, res) {
    console.log('Index router');
    Bird.find({}, function(err, data) {
      console.log(req.body);
      console.log(data);
      if (err) {
        console.log(err);
      }
      return res.json(data);
    });
  });

  router.post('/birds', function(req, res) {
    console.log('You hit the post')
    var newBird = new Bird(req.body);
    console.log(req.body);
    newBird.save({}, function(err, data) {
      if (err){
        errorResponse(err, res);
        return;
      }
      res.json(data);
    });
  });

  router.put('/birds/:id', function (req, res) {
    console.log('Hit update route');
    var updatedBird = req.body;
    delete updatedBird._id;

    Bird.update({'_id': req.params.id}, updatedBird, function (err, data) {
      console.log(req.body);
      if (err) {
        errorResponse(err, res);
        return;
      }
      res.json({msg: 'updated successfully'});
    });
  });


  router.delete('/birds/:id', function(req, res) {
    console.log('You hit delete');
    Bird.remove({'_id': req.params.id}, function(err, data) {
      if (err) {
        errorResponse(err, res);
        return;
      }
      res.json({msg: "It's as if a million souls were screaming out in terror and were suddenly silenced"})
    });
  });
};



  //   //POST a new bird
  //   .post(function(req, res) {
  //     // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
  //     var birdname = req.body.birdname;
  //     var birdcolor = req.body.birdcolor;
  //     //call the create function for our database
  //     mongoose.model('Bird').create({
  //       birdname : birdname,
  //       birdcolor : birdcolor
  //     }, function (err, bird) {
  //       if (err) {
  //         res.send("There was a problem adding the information to the database.");
  //       } else {
  //         //Bird has been created
  //         console.log('POST creating new bird: ' + bird);
  //         res.format({
  //           //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
  //           html: function(){
  //             // If it worked, set the header so the address bar doesn't still say /adduser
  //             res.location("birds");
  //             // And forward to success page
  //             res.redirect("/birds");
  //           },
  //           //JSON response will show the newly created bird
  //           json: function(){
  //             res.json(bird);
  //           }
  //         });
  //       }
  //     })
  //   });

  // /* GET New Bird page. */
  // router.get('/new', function(req, res) {
  //   res.render('birds/new', { title: 'Add New Bird' });
  // });

  // // route middleware to validate :id
  // router.param('id', function(req, res, next, id) {
  //   console.log('validating ' + id + ' exists');
  //   //find the ID in the Database
  //   mongoose.model('Bird').findById(id, function (err, bird) {
  //     //if it isn't found, we are going to repond with 404
  //     if (err) {
  //       console.log(id + ' was not found');
  //       res.status(404)
  //       var err = new Error('Not Found');
  //       err.status = 404;
  //       res.format({
  //         html: function(){
  //           next(err);
  //         },
  //         json: function(){
  //           res.json({message : err.status  + ' ' + err});
  //         }
  //       });
  //     //if it is found we continue on
  //     } else {
  //       //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
  //       console.log(bird);
  //       // once validation is done save the new item in the req
  //       req.id = id;
  //       // go to the next thing
  //       next();
  //     }
  //   });
  // });

  // router.route('/:id')
  //   .get(function(req, res) {
  //     mongoose.model('Bird').findById(req.id, function (err, bird) {
  //     if (err) {
  //       console.log('GET Error: There was a problem retrieving: ' + err);
  //     } else {
  //       console.log('GET Retrieving ID: ' + bird._id);
  //       var birdcolor = bird.birdcolor;
  //       res.format({
  //         html: function(){
  //           res.render('birds/show', {
  //             "birdcolor" : birdcolor,
  //             "bird" : bird
  //           });
  //         },
  //         json: function(){
  //           res.json(bird);
  //         }
  //       });
  //     }
  //     });
  //   });

  // router.route('/:id/edit')
  //   //GET the individual bird by Mongo ID
  //   .get(function(req, res) {
  //     //search for the bird within Mongo
  //     mongoose.model('Bird').findById(req.id, function (err, bird) {
  //       if (err) {
  //         console.log('GET Error: There was a problem retrieving: ' + err);
  //       } else {
  //         //Return the bird
  //         console.log('GET Retrieving ID: ' + bird._id);
  //         var birdcolor = bird.birdcolor;
  //         res.format({
  //           //HTML response will render the 'edit.jade' template
  //           html: function(){
  //             res.render('birds/edit', {
  //               title: 'Bird' + bird._id,
  //               "birdcolor" : birdcolor,
  //               "bird" : bird
  //             });
  //           },
  //           //JSON response will return the JSON output
  //           json: function(){
  //             res.json(bird);
  //           }
  //         });
  //       }
  //     });
  // 	})
  // 	//PUT to update a bird by ID
  //   .put(function(req, res) {
  //     // Get our REST or form values. These rely on the "name" attributes
  //     //find the document by ID
  //     mongoose.model('Bird').findById(req.id, function (err, bird) {
  //       // var birdname = req.body.birdname;
  //       // var birdcolor = req.body.birdcolor;
  //       //update it
  //       bird.update({
  //         birdname : req.body.birdname,
  //         birdcolor : req.body.birdcolor
  //       }, function (err, birdID) {
  //         if (err) {
  //           res.send("There was a problem updating the information to the database: " + err);
  //         }
  //         else {
  //           //HTML responds by going back to the page or you can be fancy and create a new view that shows a success page.
  //           //res.send("going back to bird page",bird._id);
  //           res.format({
  //             html: function(){
  //               res.redirect("/birds/");
  //             },
  //             //JSON responds showing the updated values
  //             json: function(){
  //               res.json(bird);
  //             }
  //           });
  //         }
  //       })
  //     });
  //   })
  //   //DELETE a Bird by ID
  //   .delete(function (req, res){
  //     //find bird by ID
  //     mongoose.model('Bird').findById(req.id, function (err, bird) {
  //       if (err) {
  //         return console.error(err);
  //       } else {
  //         //remove it from Mongo
  //         bird.remove(function (err, bird) {
  //           if (err) {
  //             return console.error(err);
  //           } else {
  //             //Returning success messages saying it was deleted
  //             console.log('DELETE removing ID: ' + bird._id);
  //             res.format({
  //               //HTML returns us back to the main page, or you can create a success page
  //               html: function(){
  //                 res.redirect("/birds");
  //               },
  //               //JSON returns the item with the message that is has been deleted
  //               json: function(){
  //                 res.json({
  //                   message : 'deleted',
  //                   item : bird
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   });

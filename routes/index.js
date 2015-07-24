// var express = require("express");
// var router = express.Router();
// var mongoose = require('mongoose');
// // var Schema = mongoose.Schema;
// //
// // var Bird = mongoose.model("Bird", {
// //     birdname: String,
// //     birdcolor: String
// // });
// module.exports = function(router) {
//
//     /* GET New User page. */
//   router.get('/newbird', function(req, res) {
//       res.render('newbird', { title: 'Add New Bird' });
//   });
//
//   router.get("/birdlist", function(req, res) {
//       var db = req.db;
//       var collection = db.get("birdcollection");
//       collection.find({},{},function(e,docs){
//           res.render("birdlist", {
//               "birdlist" : docs
//           });
//       });
//   });
//
//   /* POST to Add User Service */
//   //********************
//   router.post('/addbird', function(req, res) {
//
//       // Set our internal DB variable
//       var db = req.db;
//       // Set our collection
//       var collection = db.get('birdcollection');
//
//       // Submit to the DB
//       collection.insert({
//           "birdname" : req.body.birdname,
//           "color" : req.body.birdcolor
//       }, function (err, doc) {
//           if (err) {
//               // If it failed, return error
//               res.send("There was a problem adding the information to the database.");
//           }
//           else {
//               // And forward to success page
//               res.redirect("birdlist");
//           }
//       });
//   });
//
//   // delete a bird
//   router.delete('/removebird', function(req, res) {
//   // Set our internal DB variable
//     var db = req.db;
//     // Set our collection
//     var collection = db.get('birdcollection');
//
//     collection.remove({
//         "birdname": req.body.birdname
//     }, function(err, doc) {
//       if (err) {
//           // If it failed, return error
//           res.send("There was a problem removing the item from the database.");
//       }
//       else {
//           // And forward to success page
//           res.redirect("birdlist");
//       }
//     });
//   });
//
// };

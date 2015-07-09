var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var birdSchema = new Schema ({
  birdname: String,
  color: String
});

var Bird = mongoose.model('Bird', birdSchema);

// /* GET home page. */
// router.get("/", function(req, res) {
//     res.render('index', { title: 'Express' });
// });
//
// /* GET Hello World page. */
// router.get("/helloworld", function(req, res) {
//     res.render("helloworld", { title: 'Hello, World!' });
// });
/* GET Userlist page. */

/* GET New User page. */
router.get('/newbird', function(req, res) {
    res.render('newbird', { title: 'Add New Bird' });
});

router.get("/birdlist", function(req, res) {
    var db = req.db;
    var collection = db.get("birdcollection");
    collection.find({},{},function(e,docs){
        res.render("birdlist", {
            "birdlist" : docs
        });
    });
});

/* POST to Add User Service */
router.post('/addbird', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var newBird = new birdSchema(req.body.birdname, req.body.birdcolor);

    // Set our collection
    var collection = db.get('birdcollection');

    // Submit to the DB
    collection.insert({
        "birdname" : newBird.birdname,
        "color" : newBird.color
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("birdlist");
        }
    });
});

module.exports = router;

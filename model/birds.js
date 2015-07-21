var mongoose = require('mongoose');
var birdSchema = new mongoose.Schema({
  birdname: String,
  birdcolor: String
});
mongoose.model('Bird', birdSchema);

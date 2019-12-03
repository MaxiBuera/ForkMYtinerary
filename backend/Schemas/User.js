var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String
  });
  
  //console.log("Soy User.js")
  var User = mongoose.model('User', userSchema);

  module.exports = User;
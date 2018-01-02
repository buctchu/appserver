const mongoose = require('mongoose');
let LoginSchema = new mongoose.Schema({
  username: String,
  userpw:  String,
});
module.exports = mongoose.model('Login', LoginSchema);

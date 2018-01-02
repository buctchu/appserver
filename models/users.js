let mongoose = require('mongoose');
let schema = mongoose.Schema;

let userSchema = new Schema({
    user_name: String,
    user_pw: String,
    // comments: [{body: String, date: Date}],
    // date: {type: Date, default: Date.now},
    // hidden:Boolen
});

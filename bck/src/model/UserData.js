const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/User');
const Schema = mongoose.Schema;
var UserSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    pwd:String,
    phone:Number
});
var Userdata = mongoose.model('user',UserSchema);
module.exports  = Userdata;
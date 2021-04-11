const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Reviews');
const Schema = mongoose.Schema;
var ReviewSchema = new Schema({
    proName: String,
 
     proGenre: String,
     proRating: Number,
     proDesc: String,
   
});
var Reviewdata = mongoose.model('review',ReviewSchema);
module.exports  = Reviewdata;
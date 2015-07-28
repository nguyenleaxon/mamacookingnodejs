var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var Category = require('./category.js');

var videoSchema = mongoose.Schema({
    name: String,
    image: String,
    url: String,
    videocategory: { type: Schema.Types.ObjectId, ref: 'VideoCategory' }
});



var Video = mongoose.model('video',videoSchema,"video");
module.exports = Video;



var Video = require("../models/video.js");
var ObjectId = require('mongoose').Types.ObjectId;
module.exports = {
    registerRoutes: function (app) {
        app.get("/", this.home);
        app.post("/videos", this.videos);
    },

    home: function (req, res, next) {
        res.render('home');
    },

    videos: function (req, res, next) {
        console.dir(req.body.id);
     // var categoryID =  req.params.id;
        var categoryID = "55881f6762d47a47057a0be8";
        Video.find({"videoCategory.$id": ObjectId(categoryID)}, function(err, video) {
            if (err) return console .error (err);
            res.json (video.map ( function(returnVideo){
            return {
                    id: returnVideo._id,
                    name : returnVideo.name,
                    image: returnVideo.image,
                    url: returnVideo.url

                }
            }));
        });

    }


};
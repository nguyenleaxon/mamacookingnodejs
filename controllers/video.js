var Video = require("../models/video.js");
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    registerRoutes: function (app) {
        app.get("/", this.home);
        app.post("/videos", this.videos);
        app.post("/getAllVideoFirstTime",this.getAllVideoFirstTime)
    },

    home: function (req, res, next) {
        res.render('home');
    },

    videos: function (req, res, next) {
        var categoryID =  req.body.categoryID;
        var skipVideo = req.body.skip;
        var limitVideo = 4;
        console.dir(categoryID);
        console.dir(skipVideo);

            Video.find({"videoCategory.$id": ObjectId(categoryID)}, function(err, video) {
                if (err) return console .error (err);
                res.json (video.map ( function(returnVideo){
                    return {
                        id: returnVideo._id,
                        name : returnVideo.name,
                        image: returnVideo.image,
                        url: returnVideo.url,
                        total:count

                    }
                }));
            }).sort("name").skip(skipVideo).limit(limitVideo);



    },

    getAllVideoFirstTime : function(req,res,next) {
        var categoryID =  req.body.categoryID;
        var skipVideo = req.body.skip;
        var limitVideo = 4;
        console.dir(categoryID);
        console.dir(skipVideo);
        Video.count({"videoCategory.$id": ObjectId(categoryID)}, function(err, count) {
            if (err) return console .error (err);
            Video.find({"videoCategory.$id": ObjectId(categoryID)}, function(err, video) {
                if (err) return console .error (err);
                res.json (video.map ( function(returnVideo){
                    return {
                        id: returnVideo._id,
                        name : returnVideo.name,
                        image: returnVideo.image,
                        url: returnVideo.url,
                        total:count

                    }
                }));
            }).sort("name").skip(skipVideo).limit(limitVideo);

        });

    }


};
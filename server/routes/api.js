const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require ('../models/video');
//const MongoClient = require('mongodb').MongoClient;

const db = "mongodb+srv:/dbname:<dbpassword>@videoplayer-rxz1p.mongodb.net/test?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;

mongoose.connect(db, {useNewUrlParser: true});
   /* {
    if(err){
        console.error("Error! " + err);
    }
});*/

/*
client.connect(err =>{
    const collection = client.db("test").collection("devices");
    //perform actions on the collection object 
    client.close();
})
//const client = new MongoClient (db, {useNewUrlParser: true});

mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    
    if(err){
        console.error("Error! " + err);
    }
});
*/

//Calling video db 
router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if(err){
            console.log("Error retrieving videos");
        }else {
            res.json(videos);
        }
    });
});

module.exports = router;
 
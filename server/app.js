var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var path = require('path');
//ROUTES
var cats = require("./routes/cats");
var index = require('./routes/index');

//App Settings
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//DB Stuff
var mongoURI = "mongodb://localhost:27017/eta_cats";
//This is mongodb running for this application on my specific machine
var MongoDB = mongoose.connect(mongoURI).connection;

//params available: error is one
MongoDB.once("open", function(error){
    if(error) {
        console.log("ERROR: ", error);
    }
    console.log("Mongo Connection Open");
});

app.use("/cat", cats);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
var express = require('express');
var app = express();
<<<<<<< HEAD
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var path = require('path');
//ROUTES
var cats = require("./routes/cats");
var index = require('./routes/index');

//App Settings
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));
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
=======
var path = require('path');

app.set("port", process.env.PORT || 5000);

app.get("/kitties", function(req,res){
    res.json({message: "meow"});
});

app.get("/*", function(req,res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.set("port", process.env.PORT || 5000), function(){
>>>>>>> fe8d05771cb03b8bd564bafa90cbf5b035c07a19
    console.log("Listening on port: ", app.get("port"));
});
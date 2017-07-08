const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var passport = require("passport");
var session = require("express-session");

const Driver = require("./models/driver.js");
const Rider = require("./models/rider.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./build"));

const dbURI = "mongodb://localhost/hitchAlongDB";
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(dbURI);
	console.log("DB Created");
}
const db = mongoose.connection;
db.on("error", function(error){
  console.log("Mongoose Error:", error);
});
db.once("open", function(){
  console.log("Mongoose connection successful");
});

app.use(express.static(__dirname + '/'));

app.use(session({
	secret:"keyboard cat",
	resave:true,
	saveUninitialized:true
}));
app.use(passport.initialize());
//app.use(passport.session());

app.get("/", function(req,res){
  res.sendFile(__dirname + "/build/index.html");
});

require("./auth/passport/passport.js")(passport);
require("./routes/authRoutes.js")(app, passport);
require("./routes/routes.js")(app);
require("./routes/messageRoutes.js")(app);

app.listen(port, function(){
  console.log("Server running on port:" + port);
});

// Google Maps Api Key: "AIzaSyBZeGnQib45X2ryo_CNyAWMG0d6cM8H4hs"

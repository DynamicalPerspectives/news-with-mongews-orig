// {{!-- // Note to self used  05 -15-2017, 05-17-2017 (handlebar stuff) and 06-19 and 06-21-2017 exercises for all of mongo stuff --}}

// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var dotenv = require("dotenv");

// database ORM
var mongoose = require("mongoose");
// scraping tools
var request = require("request");
var cheerio = require("cheerio");

// models needed
var Articles = require("./models/articles.js");
var Comments = require("./models/comments.js");

// imports routes
var routes = require("./controllers/article_controller.js");

// loads environment variables from .env file into process.env
dotenv.load();

// sets mongoose to leverage Promises
mongoose.Promise = Promise;

// sets port
var port = process.env.PORT || 3000;

// initializes express
var app = express();

// logs requests to the console
app.use(logger("dev"));

// parses data
app.use(bodyParser.urlencoded({
  extended: false
}));

// / makes public a static dir
app.use(express.static("public"));

// sets Handlebars
var exphbs = require("express-handlebars");

// sets default view engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");


// COULDN''T GET THIS TO WORK ON HEROKU
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://heroku_7xxdzd98:8gemlpcea4d2ircinahjsk7e6b@ds153412.mlab.com:53412/heroku_7xxdzd98";


// Incorporate these routes into our app
// app.use('/', routes);
// app.use('/save', routes);
// app.use('/delete', routes);

 // routes
app.use("/", routes);

// listens on port
app.listen(port, function() {
	console.log("Listening on " + port);
});

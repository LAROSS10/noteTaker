// create variables for all npm packages being required int
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// set up portal
var PORT = process.env.PORT || 3000;

app.use(express.static("develop/public"));

// server handler function test-commented out as no longer needed
// app.get('/', function(req,res) {
//     res.send("Hello World");
// })


 
// parse application/json
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))
 
require('./develop/routes/apiRoutes.js')(app)
require('./develop/routes/htmlRoutes.js')(app)

app.listen(PORT, function () {
    console.log("App listening on PORT:"+ PORT)
});


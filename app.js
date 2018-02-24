var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
// =============================================================
app.get("/", function(req, res) {
  // res.send("Initialized.")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("api/all", function(req, res) {
	console.log(req);
	console.log(res);
  res.send("data");
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})


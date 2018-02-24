var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var waitListData = [];
var tableData = [];

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


// API Routes
// =============================================================
app.get('/api/tables', function(req, res) {
	res.json(tableData);
});

app.get('/api/waitlist', function(req, res) {
	res.json(waitListData);
});


app.post('/api/tables', function(req, res) {
	if(tableData.length < 5) {
		tableData.push(req.body);
		res.json(true);
	} else {
		waitListData.push(req.body);
		res.json(false);
	}
});


app.post('/api/clear', function(){
	tableData = [];
	waitListData = [];

	console.log(tableData);
	console.log(waitListData);
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})


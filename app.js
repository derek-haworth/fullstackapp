var express = require("express")
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
// =============================================================

app.get("/", function(req, res) {

  res.send("Initialized.")
  // res.sendFile(path.join(__dirname, "view.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})



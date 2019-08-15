// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do? --- regular get route to bring back characters... show all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do? --- dynamic route that pulls out one character that we want
app.get("/api/characters/:character", function(req, res) {
  // What does this code do? --- pulls out what was in the character and printing in the browser
  var chosen = req.params.character;
  console.log(chosen);

  // What does this code do? --- looping through character array, if check to see what user typed to see if match a character, then return with a json response for character
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

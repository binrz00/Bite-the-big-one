const db = require("./models");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
app.get("/", function(req, res){
  res.sendFile("index.html")
})
// Starts the server to begin listening
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

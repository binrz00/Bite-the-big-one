const db = require("../models");
module.exports = function(app) {
  app.get("/api/burger", function(req, res) {
    db.burger.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  app.post("/api/burger", function(req, res) {
    console.log(req.body);
    db.burger.create({
      burger_name: req.params.name
    }).then(function(data) {
      res.end();
    });

  });
app.put("/api/burger:id", function(req,res){
  console.log(req.params.id);
db.burger.update({devoured: true },{where:{id: req.params.id}})
})
};
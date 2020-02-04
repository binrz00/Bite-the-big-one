const db = require("../models");
module.exports = function (app) {
  app.get("/api/burger", function (req, res) {
    db.burger.findAll({}).then(function (results) {
      res.json(results);

    });
  });
  app.post("/api/burger", function (req, res) {
    console.log(req.body);
    db.burger.create(
      req.body
    ).then(function (data) {
      res.json(data);
    });

  });
  app.put("/api/burger/:id", function (req, res) {
    db.burger.update({ devoured: true }, { where: { id: (req.params.id) } })
      .then(function (data) {
        res.json(data)
      })
  })
};

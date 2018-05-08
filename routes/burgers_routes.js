
var express = require("express");


var db = require("../models/");

module.export = function(app) {


app.get("/", function(req, res) {

  res.redirect("/burgers");
});


app.get("/burgers", function(req, res) {

  db.Burger.findAll({}).then(function(dbBurger) {
      console.log(dbBurger);
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});


app.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(dbBurger) {

    console.log(dbBurger);

    res.redirect("/");
  });
});


app.put("/burgers/update", function(req, res) {

  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });
});
};

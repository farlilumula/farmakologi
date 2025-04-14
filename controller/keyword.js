// import modul express
const { response, request } = require("express");
// import custom id unik dgan menggunakan nmp uuid
const { v4: uuidv4 } = require("uuid");

const moment = require("moment");
// import modul item dari models
const Buy = require("../models/keyword");

// let users = [
//   { id: 1, name: "Farly Cahyadi Lumula", email: "antek.lumula@gmail.com" },
// ];

module.exports = {
  index: function (req, res) {
    // cara pencarian ke dua
    const query = Buy.find();
    query.exec(function (error, keywords) {
      if (error) console.log(error);

      console.log(keywords);
      res.render("pages/keyword", { keywords });
    });
  },

  store: function (req, res) {
    // cara tambah item pertama
    // const item = new Item({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password,
    // });
    // item.save(function (error, result) {
    //   if (error) console.log(error);
    //   console.log(result);
    //   res.redirect("/users");
    // });
    // cara tambah item ke dua
  },
};

// import modul express
const { response, request } = require("express");
// import custom id unik dgan menggunakan nmp uuid
const { v4: uuidv4 } = require("uuid");

const dateFormat = require("dateformat");

const moment = require("moment");
// import modul item dari models
const Buy = require("../models/buy");

// let users = [
//   { id: 1, name: "Farly Cahyadi Lumula", email: "antek.lumula@gmail.com" },
// ];

module.exports = {
  index: function (req, res) {
    let keyword = {};
    if (req.query.keyword) {
      keyword = {
        $or: [
          { nama_item: { $regex: req.query.keyword, $options: "i" } },
          { nama_outlet: { $regex: req.query.keyword, $options: "i" } },
        ],
      };
    }

    // cara pencarian ke dua
    const query = Buy.find(keyword)
      .sort({ nama_pelanggan: 1 })
      .collation({ locale: "en_US", numericOrdering: true })
      .limit(600);
    query.exec(function (error, buys) {
      if (error) console.log(error);

      console.log(buys);
      res.render("buy/index", { buys });
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

const { text } = require("express");
// import module mongoose
const mongoose = require("mongoose");
const moment = require("moment");
const { stringify } = require("uuid");
// membuat schema / tabel menggunakan mongose
const { Schema } = mongoose;

// buat tabel dgn nama tabel adalah item
const keywordSchema = new Schema({
  nama_keyword: String,
  upselling_1: String,
  upselling_2: String,
  upselling_3: String,
  cros_1: String,
  cros_2: String,
  comp_1: String,
  comp_2: String,
  comp_3: String,
});

// const Item = mongoose.model("Item", itemSchema);
// const Stok = mongoose.model("Stok", stokSchema);

const Keyword = mongoose.model("Keyword", keywordSchema);

module.exports = Keyword;

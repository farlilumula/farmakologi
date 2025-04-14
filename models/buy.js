const { text } = require("express");
// import module mongoose
const mongoose = require("mongoose");
const moment = require("moment");
const { stringify } = require("uuid");
const { isDate } = require("moment");
// membuat schema / tabel menggunakan mongose
const { Schema } = mongoose;

// buat tabel dgn nama tabel adalah item
const buySchema = new Schema({
  nama_outlet: String,
  waktu_trx: String,
  nama_pelanggan: String,
  nama_item: String,
  qty: Number,
  harga: Number,
  nomor_trx: String,
  phone: Number,
});

// const Item = mongoose.model("Item", itemSchema);
// const Stok = mongoose.model("Stok", stokSchema);

const Buy = mongoose.model("Buy", buySchema);

module.exports = Buy;

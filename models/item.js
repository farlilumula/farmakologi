const { text } = require("express");
// import module mongoose
const mongoose = require("mongoose");
const { stringify } = require("uuid");
// membuat schema / tabel menggunakan mongose
const { Schema } = mongoose;

// buat tabel dgn nama tabel adalah item
const itemSchema = new Schema(
  {
    kode_obat: Number,
    nama_obat: String,
    zat_aktif: String,
    kata_kunci: String,
    status: String,
    indikasi: String,
    hnappn: Number,
    link_gambar: String,
    pasien: String,
    kontra_indikasi: String,
    indication: String,
    dosis: String,
    description: String,
    aturan_pakai: String,
    efek_samping: String,
    golongan: String,
    upselling_1: String,
    upselling_2: String,
    upselling_3: String,
    crosseling_1: String,
    crosseling_2: String,
    comp_1: String,
    comp_2: String,
    comp_3: String,
  },
  { timestamps: true }
);

// buat tabel stok

// const stokSchema = new Schema({
//   kode_obat: Number,
//   nama_obat: String,
//   qty: Number,
//   pareto: String,
// });

// const Item = mongoose.model("Item", itemSchema);
// const Stok = mongoose.model("Stok", stokSchema);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

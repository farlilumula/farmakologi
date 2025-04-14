// import modul express
const { response, request } = require("express");
// import custom id unik dgan menggunakan nmp uuid
const { v4: uuidv4 } = require("uuid");
// import modul item dari models
const Item = require("../models/item");

module.exports = {
  index: function (req, res) {
    let keyword = {};
    if (req.query.keyword) {
      keyword = {
        $or: [
          { kata_kunci: { $regex: req.query.keyword, $options: "i" } },
          { nama_obat: { $regex: req.query.keyword, $options: "i" } },
          { zat_aktif: { $regex: req.query.keyword, $options: "i" } },
        ],
      };
    }

    // cara pencarian ke satu
    const query = Item.find(keyword)
      .populate("stok")
      .sort({ hnappn: -1 })
      .collation({ locale: "en_US", numericOrdering: true })
      .limit(15);


    query.exec(function (error, items) {
      if (error) console.log(error);

      console.log(items);

      const formattedItems = items.map((item) => ({
        ...item._doc,
        hnappnFormatted: new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(item.hnappn),
      }));

      res.render("user/index", { items : formattedItems });
    });
  },

  show: function (req, res) {
    const id = req.params.id;
    Item.findById(id, function (error, data) {
      if (error) console.log(error);
      console.log(data);
      res.render("user/show", { item: data });
    });
  },

  create: function (req, res) {
    res.render("pages/about");
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
    Item.create(
      {
        kode_obat: req.body.kode_obat,
        nama_obat: req.body.nama_obat,
        zat_aktif: req.body.zat_aktif,
        kode_complement: req.body.kode_complement,
        kode_indikasi: req.body.kode_indikasi,
        indikasi: req.body.indikasi,
        hnappn: req.body.hnappn,
        link_gambar: req.body.link_gambar,
        kode_pasien: req.body.kode_pasien,
        pasien: req.body.pasien,
        kontra_indikasi: req.body.kontra_indikasi,
        indication: req.body.indication,
        dosis: req.body.dosis,
        description: req.body.description,
        aturan_pakai: req.body.aturan_pakai,
        efek_samping: req.body.efek_samping,
        golongan: req.body.golongan,
        upselling_1: req.body.upselling_1,
        hargaupselling_1: req.body.hargaupselling_1,
        upselling_2: req.body.upselling_2,
        hargaupselling_2: req.body.hargaupselling_2,
        upselling_3: req.body.upselling_3,
        hargaupselling_3: req.body.hargaupselling_3,
        crosseling_1: req.body.crosseling_1,
        hargacrosseling_1: req.body.hargacrosseling_1,
        crosseling_2: req.body.crosseling_2,
        hargacrosseling_2: req.body.hargacrosseling_2,
        crosseling_3: req.body.crosseling_3,
        hargacrosseling_3: req.body.hargacrosseling_3,
        // kode_obat: req.body.kode_obat,
        // nama_obat: req.body.nama_obat,
        // zat_aktif: req.body.zat_aktif,
        // kode_complement: req.body.kode_complement,
        // kode_indikasi: req.body.kode_indikasi,
        // indikasi: req.body.indikasi,
        // hnappn: req.body.hnappn,
        // link_gambar: req.body.link_gambar,
        // kode_pasien: req.body.kode_pasien,
        // pasien: req.body.pasien,
        // kontra_indikasi: req.body.kontra_indikasi,
        // dosis: req.body.dosis,
        // pemberian_obat: req.body.pemberian_obat,
        // efek_samping: req.body.efek_samping,
      },
      function (error, result) {
        if (error) console.log(error);

        console.log(result);
        res.redirect("/items");
      }
    );
  },

  edit: function (req, res) {
    const id = req.params.id;
    Item.findById(id, function (error, items) {
      if (error) console.log(error);

      console.log(items);
      res.render("user/edit", { items });
    });
  },

  update: function (req, res) {
    const id = req.params.id;
    items.filter((item) => {
      if (item.id == id) {
        item.id = _id;
        item.kode_obat = req.body.kode_obat;
        item.nama_obat = req.body.nama_obat;
        item.zat_aktif = req.body.zat_aktif;
        item.kode_complement = req.body.kode_complement;
        item.kode_indikasi = req.body.kode_indikasi;
        item.indikasi = req.body.indikasi;
        item.hnappn = req.body.hnappn;
        item.link_gambar = req.body.link_gambar;
        item.kode_pasien = req.body.kode_pasien;
        item.pasien = req.body.pasien;
        item.kontra_indikasi = req.body.kontra_indikasi;
        item.indication = req.body.indication;
        item.dosis = req.body.dosis;
        item.description = req.body.description;
        item.aturan_pakai = req.body.aturan_pakai;
        item.efek_samping = req.body.efek_samping;
        item.golongan = req.body.golongan;
        item.upselling_1 = req.body.upselling_1;
        item.hargaupselling_1 = req.body.hargaupselling_1;
        item.upselling_2 = req.body.upselling_2;
        item.hargaupselling_2 = req.body.hargaupselling_2;
        item.upselling_3 = req.body.upselling_3;
        item.hargaupselling_3 = req.body.hargaupselling_3;
        item.crosseling_1 = req.body.crosseling_1;
        item.hargacrosseling_1 = req.body.hargacrosseling_1;
        item.crosseling_2 = req.body.crosseling_2;
        item.hargacrosseling_2 = req.body.hargacrosseling_2;
        item.crosseling_3 = req.body.crosseling_3;
        item.hargacrosseling_3 = req.body.hargacrosseling_3;

        return item;
      }
    });
    res.redirect("user/index", { items });
  },
  delete: function (req, res) {
    let id = req.params.id;
    items = users.filter((user) => user.id != id);
    res.send({
      status: true,
      data: users,
      message: "Data User berhasil di Delete",
      method: req.method,
      url: req.url,
    });
  },
};

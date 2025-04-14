const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const userController = require("../controller/item");

// menentukan route jika ingin routing 2 method yaitu get dan post harus menggunakan router.route
router.route("/items").get(userController.index).post(userController.store);

// route untuk menambah item
router.get("/items/create", userController.create);

// route untuk edit item
router.put("/items/:id/update", userController.update);

router.post("/items/:id", userController.update);

// route untuk delete item
router.delete("/items/:id", userController.delete);

router.get("/items/:id/edit", userController.edit);

router.get("/items/:id", userController.show);

// export modul router
module.exports = router;

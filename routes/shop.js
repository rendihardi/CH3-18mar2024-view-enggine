const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { title: "FSW 1 Luar Biasa", products: products });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const {getProducts,createProduct} = require("./../controller/product");

// ---------- Routes ----------

// get all the products
router.route("/").get(getProducts);

// create a product
router.route("/").post(createProduct);

module.exports = router
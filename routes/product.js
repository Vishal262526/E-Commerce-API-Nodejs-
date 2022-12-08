const express = require("express");
const router = express.Router();
const {getProducts,createProduct} = require("./../controller/product");

// ---------- Routes ----------

// get all the products route
router.route("/").get(getProducts);

// create a product route
router.route("/").post(createProduct);

module.exports = router
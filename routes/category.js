const express = require("express");
const router = express.Router();
const {getCategoires, createCategory} = require("./../controller/category");
// ---------- Routes ----------

// get all the products
router.route("/").get(getCategoires);

// create a product
router.route("/").post(createCategory);

module.exports = router
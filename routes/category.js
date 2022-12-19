const express = require("express");
const router = express.Router();
const {getCategoires, createCategory, deleteCategory, updateCategory} = require("./../controller/category");
// ---------- Routes ----------

// get all the category
router.route("/").get(getCategoires);

// create a categiry
router.route("/").post(createCategory);

// Delete a category
router.route("/").delete(deleteCategory);

// Update a Category
router.route("/:id").put(updateCategory);

module.exports = router
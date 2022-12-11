// Common Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");



// Routes imports
const product = require("./routes/product");
const category = require("./routes/category");

// For getting the global variables
require("dotenv/config");



const api = process.env.API_URL

// ---------- Middleware ----------
app.use(bodyParser.json()); // for parsing JSON data

// ---------- Routes -----------
app.use(`${process.env.API_URL}/products`,product);
app.use(`${process.env.API_URL}/category`,category);
    

// Port where server is listen
app.listen(3000, () => {
    console.log(api);
})
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv/config");
const product = require("./routes/product");
const category = require("./routes/category");

const api = process.env.API_URL

// ---------- Middleware ----------

// Make fronted send json data to this API
app.use(bodyParser.json());

// Use this middleare for "localhost:3000/api/v1/product"
app.use(`${process.env.API_URL}/product`,product);
app.use(`${process.env.API_URL}/category`,category);
    
app.listen(3000, () => {
    console.log(api);
})
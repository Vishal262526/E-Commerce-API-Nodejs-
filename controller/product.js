const {db} = require("./../db/connect");


// Get all the Products
const getProducts = (req,res) => {
    const sql = `SELECT * FROM products`;
    console.log(sql)
    db.query(sql, (err, result) => {
        if (err) throw err;
        result.length > 0 ? res.status(200).json(result): res.status(404).json({success:false,msg:"There are no Products Found"});
        
    })
}

// Create a new Product
const createProduct = (req,res) => {
    const {title, description, image} = req.body
    const sql = `INSERT INTO product (title,description,image) VALUES ('${title}','${description}','${image}')`;
    console.log(sql)
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    })

}

module.exports = {getProducts, createProduct};
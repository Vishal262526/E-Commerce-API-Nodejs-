const { db } = require("./../db/connect");


// Get all categories
const getCategoires = (req, res, next) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.status(200).json(result)
        }
        else {
            res.status(403).json({ success: false, msg: "There are no Category Found" });
        }
    })
}


// Delete a Category
const deletCategory = (req, rest, next) => {
    const category_id = req.params.id;
    const sql = `DELETE FROM category WHERE id = ${category_id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).json({success:true, msg:"Category Deleted"});
    })
}


// Create a new Category
const createCategory = (req, res, next) => {
    const { name, color, icon, image } = req.body;
    const sql = `INSERT INTO category (name,color,icon, image) VALUES ('${name}','${color}','${icon}','${image}')`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ success: false, msg: err });
        }
        res.status(200).json({ success: true, msg: "Category Created" });
    })
}

// Delete a Category
const deleteCategory = (req,res) => {

    // get the category id from the fronted
    const {id} = req.body;

    const sql = `SELECT id FROM category WHERE id = ${id}`;
    // Run the query 
    db.query(sql, (err,result) => {
        if (err) throw err;
        if (result.length > 0){
            const delete_category_query = `DELETE FROM category WHERE id = ${id}`;
            db.query(delete_category_query, (err,rresult) => {
                if (err) throw err;

                res.status(200).json({success:true,msg:"Category Deleted"});
            })
        }
        else{
            return res.status(404).json({sucess:false,msg:"Category not Found"});
        }
    })

}

// Update a Category
const updateCategory = (req,res) => {
    const id = req.params.id;
    const {name, color, icon} = req.body;
    const sql = `SELECT * FROM category WHERE id = ${id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        else if(result.length > 0){
            const update_category_query = `UPDATE category SET name = '${name}', color = '${color}', icon = '${icon}' WHERE id = ${id}`;
            db.query(update_category_query, (err,result) => {
                if (err) throw err;
                res.status(200).json({success:true, msg:"Category Updated"});
            })
        }
        else{
            res.status(404).json({success:false,msg:"Category Not Found"});
        }
    })
}

module.exports = { getCategoires, createCategory, deleteCategory, updateCategory };
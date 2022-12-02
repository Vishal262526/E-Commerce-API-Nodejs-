const {db} = require("./../db/connect");
const getCategoires = (req,res,next) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err,result) => {
        if (err) throw err;
        if(result.length > 0){
            res.status(200).json(result)
        }
        else{
            res.status(200).json({success:false, msg:"There are no Category Found"});
        }
    })
}

const createCategory = (req,res,next) => {
    const {name, color, icon, image} = req.body;
    const sql = `INSERT INTO category (name,color,icon, image) VALUES ('${name}','${color}','${icon}','${image}')`;
    db.query(sql, (err,result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({success:false,msg:"Something Went Wrong"});
        }
        res.status(200).json({success:true,msg:"Category Created"});
    })
}

module.exports = {getCategoires, createCategory};
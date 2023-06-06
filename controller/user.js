const { db } = require("../db/connect");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = (req,res,next) => {

}

const createUser = (req,res,next) => {
    const {name, username, email, password, confirmPassword} = req.body;

    if(!name || !username || !email || !password || !confirmPassword){
        return res.status(500).json({"msg":"All Fields are Required"});
    }
    const check_email_query = `SELECT id FROM users WHERE email = ${email}`;

    db.query(check_email_query, async (err,result) => {
        if (err) throw err;
        
        if(result.length > 0){
            return res.status(500).json({"msg":"Email Already in use"});
        }

        if(password != confirmPassword){
            return res.status(500).json({msg:"PAssword does not Match "});
        }

        // Hash the Password
        const hashPassword = await bcrypt.hash(password, 10);
        // Create a User
        const create_user_query = `INSERT INTO users (name,username,email,password) VALUES ('${name}', '${username}', '${email}', '${hashPassword}')`;
        
        db.query(create_user_query, (err,result) => {
            if (err) throw err;
            console.log(result);
            const secretKey = process.env.SECRET_KEY;
            const token = jwt.sign({email:email},secretKey, {expiresIn:"2h",algorithm:"RS256"});
        
            result['token'] = token;

            return res.status(201).json({msg:"User Created",token:token});
        })
    })
}



module.exports = {loginUser, createUser};
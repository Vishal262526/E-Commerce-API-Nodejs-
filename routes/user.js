const express = require("express");
const router = express.Router();

const {loginUser, registerUser} = require("./../controller/user");


router.route("/login",user.loginUser);
router.route("/register",user.registerUser);


module.exports = router;
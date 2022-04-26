const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    getAllcode,
    getAllHostedUnHostedHostel   
} = require("../controllers/auth");
 const { userSignupValidator } = require("../validator/index.js");

router.post("/signup",userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/getAllcode" ,getAllcode);
router.get("/getAllHostedUnHostedHostel", getAllHostedUnHostedHostel);


module.exports = router;

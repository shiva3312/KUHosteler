const express = require("express");
const router = express.Router();

const {
    signup,
    userById,
    signin,
    signout,
    getAllcode,
    getAllHostedUnHostedHostel,   
    uploadPic,
    verfyMail,
    image,
    updatepassword,
    resetPassword
} = require("../controllers/auth");
 const { userSignupValidator } = require("../validator/index.js");

router.post("/signup",userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/getAllcode" ,getAllcode);
router.post('/resetPassword',resetPassword);
router.get("/getAllHostedUnHostedHostel", getAllHostedUnHostedHostel);
router.post("/user/uploadphoto/:userId" ,uploadPic);
router.post("/verfyMail" , verfyMail);
router.put("/updatepassword",updatepassword )
router.get("/image/:userId", image);

router.param('userId', userById);
module.exports = router;

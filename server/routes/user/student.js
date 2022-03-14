const express = require("express");
const router = express.Router();

const {
    isAuth,
    signout,
    requireSignin
} = require("../../controllers/auth");

 const {
    userById,
    read,
    messActivity,
    helpdesk,
    //editProfile,
    //abouthostel,
    //msgToManger,
    //socialpost,
    //annonymouspost,
    notice,
    mealRecord,
    paymentRecord,
    addguest ,
    updateguest,
    removeguest,
    theme
   } = require("../../controllers/user/student");


router.get("/home/:userId",requireSignin,isAuth, read );
router.get("/mealRecord/:userId",requireSignin,  mealRecord);
router.get("/paymentRecord/:userId",requireSignin,isAuth, paymentRecord);
router.get("/helpdesk/:userId",requireSignin,isAuth, helpdesk);
router.get("/notice/:userId",requireSignin,isAuth,notice);
// router.get("/abouthostel/:userId",abouthostel);

// router.post("/msgToManger/:userId",requireSignin,isAuth, msgToManger);
// router.post("/socialpost/:userId",requireSignin,isAuth,socialpost);
// router.post("/annonymouspost/:userId",requireSignin,isAuth,annonymouspost);
router.post("/addguest/:userId",requireSignin,isAuth, addguest)

// router.put("/editProfile/:userId",requireSignin,isAuth, editProfile);
router.put("/meal/messActivity/:userId",requireSignin,isAuth, messActivity);


router.put("/setting/theme/:userId",requireSignin,isAuth, theme);
router.put("/updateguest/:userId" , requireSignin,isAuth,updateguest)

router.delete("/removeguest/:userId" ,requireSignin,isAuth, removeguest);

router.param('userId',requireSignin,isAuth, userById);


module.exports = router;

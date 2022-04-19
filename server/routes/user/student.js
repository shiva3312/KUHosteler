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

router.use("/*/:userId",requireSignin,isAuth, (req, res,next)=>{
  next();
});

router.get("/home/:userId", read );
router.get("/mealRecord/:userId",  mealRecord);
router.get("/paymentRecord/:userId", paymentRecord);
router.get("/helpdesk/:userId", helpdesk);
router.get("/notice/:userId",notice);
// router.get("/abouthostel/:userId",abouthostel);

// router.post("/msgToManger/:userId", msgToManger);
// router.post("/socialpost/:userId",socialpost);
// router.post("/annonymouspost/:userId",annonymouspost);
router.post("/addguest/:userId", addguest)

// router.put("/editProfile/:userId",requireSignin,isAuth, editProfile);
router.put("/meal/messActivity/:userId", messActivity);


router.put("/setting/theme/:userId", theme);
router.put("/updateguest/:userId" ,updateguest)

router.post("/removeguest/:userId" , removeguest);

router.param('userId',userById);


module.exports = router;

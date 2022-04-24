const express = require("express");
const router = express.Router();

const {
    isAuth,
    signout,
    isManager,
    requireSignin
} = require("../../controllers/auth");

 const {
    userById,

    // GET ROUTER function
    read,
    allstudents,
    allemployee,
    allReqList,
    studpayRecord,
    gethelpSection,
    notice,
    abouthostel,  //get and post both
    getStudentprofile,
    getCharges,

    // POST ROUTER function .....
    msgToAllSturent,
    socialpost,
    annonymouspost,
    sethelpSection,      //get and post both

    // PUT ROUTER function
    editProfile,
    setCharges,
    setboundtime,
    setmessActivity,  // turn on  / turn off whole mess
    fchangeMealStatus, // forcefully manager can change the meal status of particular student
    setstudetnHostelId,
    updateMembershipStatus,
    theme
  } = require("../../controllers/user/manager");


router.use("/*/:userId",requireSignin,isAuth,isManager, (req, res,next)=>{
    next();
});

router.get("/read/:userId", read );
router.get("/todaymealList/:userId",  allstudents );  //check student meal status and its guest on front-end side
router.get("/allstudents/:userId", allstudents );
router.get("/allemployee/:userId", allemployee);
router.get("/allReqList/:userId", allReqList);
router.get("/studpayRecord/:stuId/:userId",studpayRecord);
router.get("/helpSection/:userId" ,gethelpSection);
router.get("/notice/:userId", notice);
router.get("/abouthostel/:userId",abouthostel);
router.get("/getCharges/:userId" ,getCharges);
router.get("studentprofile/:stuId/:userId",getStudentprofile);

// router.post("/msgToManger/:userId",msgToManger);
// router.post("/socialpost/:userId",socialpost);
// router.post("/annonymouspost/:userId",annonymouspost);
router.post("/sethelpSection/:userId",sethelpSection);



// router.put("/editProfile/:userId",editProfile);
router.put("/meal/activateAcoount/:stuId/:userId",updateMembershipStatus);
router.put("/meal/messActivity/:userId",setmessActivity);
router.put("/fchangeMealStatus/stu/:stuId/:userId",fchangeMealStatus)
router.put("/setCharges/:userId" ,setCharges)
router.put("/setboundtime/:userId" ,setboundtime)
router.put("/setstudetnHostelId/:stuId/:userId",setstudetnHostelId);
router.put("/setting/theme/:userId",theme);

router.param('userId', userById);


module.exports = router;

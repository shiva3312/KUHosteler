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
    dashboard,
    allstudents,
    allemployee,
    studpayRecord,
    gethelpSection,
    notice,
    abouthostel,  //get and post both
    getStudentprofile,
    getcost,

    // POST ROUTER function .....
    msgToAllSturent,
    socialpost,
    annonymouspost,
    sethelpSection,      //get and post both

    // PUT ROUTER function
    editProfile,
    setcost,
    setboundtime,
    setmessActivity,  // turn on  / turn off whole mess
    fchangeMealStatus, // forcefully manager can change the meal status of particular student
    setstudetnHostelId,
    activateAcoount,
    deactivateAccount,
    rejectAccountCreation,
    wasmember,
    officialguest,
    theme
  } = require("../../controllers/user/manager");

router.get("/dashboard/:userId",requireSignin,isAuth,isManager, dashboard );
router.get("/todaymealList/:userId",requireSignin,isAuth,isManager,  allstudents );  //check student meal status and its guest on front-end side
router.get("/allstudents/:userId",requireSignin,isAuth,isManager,  allstudents );
router.get("/allemployee/:userId",requireSignin,isAuth,isManager,  allemployee);
router.get("/studpayRecord/:stuId/:userId",requireSignin,isAuth,isManager,  studpayRecord);
router.get("/gethelpSection/:userId",requireSignin,isAuth,isManager,  gethelpSection);
router.get("/notice/:userId",requireSignin,isAuth,isManager, notice);
router.get("/abouthostel/:userId",requireSignin,isAuth,isManager, abouthostel);
router.get("/getcost/:userId" ,requireSignin,isAuth,isManager,  getcost);
router.get("studentprofile/:stuId/:userId" ,requireSignin,isAuth,isManager,  getStudentprofile);

// router.post("/msgToManger/:userId",requireSignin,isAuth,isManager,  msgToManger);
// router.post("/socialpost/:userId",requireSignin,isAuth,isManager, socialpost);
// router.post("/annonymouspost/:userId",requireSignin,isAuth,isManager, annonymouspost);
router.post("/sethelpSection/:userId",requireSignin,isAuth,isManager,  sethelpSection);



// router.put("/editProfile/:userId",requireSignin,isAuth,isManager,  editProfile);
router.put("/meal/activateAcoount/:stuId/:userId",requireSignin,isAuth,isManager,  activateAcoount);
router.put("/meal/deactivateAccount/:stuId/:userId",requireSignin,isAuth,isManager,  deactivateAccount);
router.put("/meal/rejectAccountCreation/:stuId/:userId",requireSignin,isAuth,isManager,  rejectAccountCreation);
router.put("/meal/warmember/:stuId/:userId",requireSignin,isAuth,isManager,  wasmember);
router.put("/meal/officialguest/:stuId/:userId",requireSignin,isAuth,isManager, officialguest );
router.put("/meal/messActivity/:userId",requireSignin,isAuth,isManager,  setmessActivity);
router.put("/fchangeMealStatus/stu/:stuId/:userId",requireSignin,isAuth,isManager,  fchangeMealStatus)
router.put("/setcost/:userId" ,requireSignin,isAuth,isManager,  setcost)
router.put("/setboundtime/:userId" ,requireSignin,isAuth,isManager,  setboundtime)
router.put("/setstudetnHostelId/:stuid/:userId",requireSignin,isAuth,isManager,  setstudetnHostelId);
router.put("/setting/theme/:userId",requireSignin,isAuth,isManager,  theme);

router.param('userId', userById);


module.exports = router;

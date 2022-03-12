const express = require("express");
const router = express.Router();

const {
    isAuth,
    signout,
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

router.get("/dashboard/:userId", dashboard );
router.get("/todaymealList/:userId", allstudents );  //check student meal status and its guest on front-end side
router.get("/allstudents/:userId", allstudents );
router.get("/allemployee/:userId", allemployee);
router.get("/studpayRecord/:stuId/:userId", studpayRecord);
router.get("/gethelpSection/:userId", gethelpSection);
router.get("/notice/:userId",notice);
router.get("/abouthostel/:userId",abouthostel);
router.get("/getcost/:userId" , getcost);
router.get("studentprofile/:stuId/:userId" , getStudentprofile);

// router.post("/msgToManger/:userId", msgToManger);
// router.post("/socialpost/:userId",socialpost);
// router.post("/annonymouspost/:userId",annonymouspost);
router.post("/sethelpSection/:userId", sethelpSection);



// router.put("/editProfile/:userId", editProfile);
router.put("/meal/activateAcoount/:stuId/:userId", activateAcoount);
router.put("/meal/deactivateAccount/:stuId/:userId", deactivateAccount);
router.put("/meal/rejectAccountCreation/:stuId/:userId", rejectAccountCreation);
router.put("/meal/warmember/:stuId/:userId", wasmember);
router.put("/meal/officialguest/:stuId/:userId",officialguest );
router.put("/meal/messActivity/:userId", setmessActivity);
router.put("/fchangeMealStatus/stu/:stuId/:userId", fchangeMealStatus)
router.put("/setcost/:userId" , setcost)
router.put("/setboundtime/:userId" , setboundtime)
router.put("/setstudetnHostelId/:stuid/:userId", setstudetnHostelId);
router.put("/setting/theme/:userId", theme);

router.param('userId', userById);


module.exports = router;

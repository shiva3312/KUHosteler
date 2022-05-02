const express = require("express");
const router = express.Router();

const {
    isAuth,
    requireSignin
} = require("../../controllers/auth");

 const {
    userById,
    read,
    getPreparedMealList
   
   } = require("../../controllers/user/employee");

router.use("/*/:userId",requireSignin,isAuth, (req, res,next)=>{
  next();
});

router.get("/read/:userId", read );
router.get("/preparedMealList/:userId" , getPreparedMealList);

router.param('userId',userById);


module.exports = router;

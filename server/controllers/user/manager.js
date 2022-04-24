const User = require("../../models/user.js");
const BoundTime = require("../../models/boundTime.js");
/// indian date-time system
var d = new Date();
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

// current_date is of 24h system .....
current_date = new Date(utc + (3600000*+5.5));

// current_date12 is 12h system
var current_date12 =  current_date.toLocaleString();


// GET ROUTE funtions .............

exports.userById = async (req, res, next, id) => {
await  User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

exports.read = (req , res)=>{
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
}

exports.allstudents = (req, res)=>{
  User.find({hostelName : req.profile.hostelName , profileType: 0 } , (err, users)=>{
    if(err || !users){
      return res.json({error: "Somthing went wrong"});
    } else {
      return res.json({ students: users});
    }1
  })
}


exports.allemployee = (req, res)=>{
  User.find({hostelName : req.profile.hostelName , profileType: 2 } , (err, users)=>{
    if(err || !users){
      return res.json({error: "Somthing went wrong"});
    } else {
      return res.json({ users: users});
    }
  })
}


exports.allReqList = (req, res)=>{
  User.find({hostelName : req.profile.hostelName , profileType: 0 ,$or :[{membership:0},{membership:5}] } , (err, students)=>{
    if(err || !students){
      return res.json({error: "Somthing went wrong with students List"});
    } else {   
       User.find({hostelName : req.profile.hostelName , profileType: 2 ,$or :[{membership:0},{membership:5}]} , (err, employees)=>{
         if(err || !employees){
            return res.json({error: "Somthing went wrong with employee list"});
          } else {
            return res.json({ employees, students});
            }
          })
        }
     })
}



exports.studpayRecord = (req, res)=>{
  User.find({_id : req.body.stuId } , (err, users)=>{
    if(err || !users){
      return res.json({error: "Somthing went wrong"});
    } else {
      return res.josn({ users: users.payRecord});
    }
  })
}

exports.gethelpSection = (req, res)=>{
  return res.json({ helpSection: req.profile.helpSection});
}
exports.notice = (req, res)=>{
  return res.json({notice : req.profile.notice})
}
exports.abouthostel = (req, res)=>{
  return res.json({abouthostel : req.profile.abouthostel})
}


exports.getStudentprofile = (req, res)=>{
  User.findOne({_id : req.body.studId } , (err, users)=>{
    if(err || !users){
      return res.json({error: "Somthing went wrong"});
    } else {
      return res.josn({ users: users});
    }
  })
}

exports.getCharges = (req, res)=>{
  return res.json({
    guestMorMealCharge : req.profile.guestMorMealCharge,
    guestNigMealCharge : req.profile.guestNigMealCharge,
    grandCharge : req.profile.grandCharge,
    newChargelist: req.profile.newChargelist
  })
}






// POST ROUTE funtions .............

exports.msgToAllSturent = (req, res)=>{
}

exports.socialpost = (req, res)=>{
}

exports.annonymouspost = (req, res)=>{
}

exports.sethelpSection = (req, res)=>{
  const newPerson = {
    tag : req.body.tag,
    name : req.body.name,
    description: req.body.description,
    about: req.body.about,
    contact : {
      phNo: req.body.phNo,
      email : req.body.email
    }
  };

    User.findOne({ _id:req.profile._id}, (err, user)=>{

    if(err || !user) {
      return res.json({error : "somthing went wrong"});
    } else {
      user.helpSection.push(newPerson);
      user.save((err, result)=>{
        if(err) return res.json(err);
        else{
           return res.json({ info: "successfully added"})
        }
      });
    }
  })
}



// PUT ROUTE funtion ..............


exports.editProfile = (req, res)=>{
}

exports.setCharges = (req, res)=>{
  User.findOne({_id: req.profile._id}, (err, user)=>{
    if(err || !user ){
      return res.json({
        error : "Something went wrong"
      });
    }else{
      user.guestMorMealCharge = req.body.guestMorMealCharge;
      user.guestNigMealCharge = req.body.guestNigMealCharge;
      user.grandCharge = req.body.grandCharge;     
      user.save();
      

    //  update charge into boundTime collection
      BoundTime.findById(req.profile._id , (err, manager)=>{
        if(err || !manager) return res.json({err:"something went wrong"});
        manager.guestMorMealCharge = user.guestMorMealCharge;
        manager.guestNigMealCharge = user.guestNigMealCharge;
        manager.grandCharge = user.grandCharge;
        manager.save((err, result)=>{
          if(err) return res.json({error: err});
          else {
            return res.json({
              info : "cost updated sucessfully",
            })
          }
        });
      })

    }
  })
}



exports.setboundtime = (req, res , next)=>{
  User.findOne({_id: req.profile._id}, (err, user)=>{
    if(err || !user ){
      return res.json({
        error : "Something went wrong"
      });
    }else{
      user.morBoundTime = req.body.morBoundTime;
      user.nigBoundTime = req.body.nigBoundTime;
      user.save();

      //update charge into boundTime collection
      BoundTime.findById(req.profile._id, (err, manager)=>{
        if(err || !manager) return res.json({err:"something went wrong"});
        manager.morBoundTime = user.morBoundTime;
        manager.nigBoundTime = user.nigBoundTime;
        manager.save((err, result)=>{
          if(err) return res.json({error: err});
            return res.json({
              status : "Time updated sucessfully",
            })

        });
      })

    }
  })
}


exports.setmessActivity = (req, res)=>{
  User.findById(req.profile._id, (err, user) =>{
    if(err|| !user){
      return res.status(400).json({ error: "User Not Found"})
    } else { user.messStatus ^= 2;
       user.save((err)=>{
        if(err)  return res.status(501).json({ error: "Mess Status has not changed"})
        else {  return res.status(501).json({ error: "sucessfully changed"})}
      });
    }
  })
}



exports.fchangeMealStatus = (req, res)=>{
  const stuId = req.body.values.stuId;
  const status = req.body.values.status;
  User.findOne({_id: stuId}, (err, user)=>{
    if(err || !user ){
      return res.json({
        error : "Something went wrong"
      });
    }else{
      user.messStatus = status;
      user.save((err, result)=>{
        if(err) return res.json({error: err});
        else {
          return res.json({
            info : "Successfully Changed"
          })
        }
      });
    }
  })
}

exports.setstudetnHostelId = (req, res)=>{
  User.findOne({_id: req.body._id}, (err, user)=>{
    if(err || !user ){
      return res.json({
        error : "Something went wrong"
      });
    }else{
      user.hostelId = req.body.hostelId;
      user.save((err, result)=>{
        if(err) return res.json({error: err});
        else {
          return res.json({
            status : "Meal Button Disabled sucessfully",
            info : result.messStatus
          })
        }
      });
    }
  })
}

exports.updateMembershipStatus =(req ,res)=>{
  const status = req.body.values.status;
  const userId = req.body.values.memId;
  User.findById({_id:userId}, (err , user)=>{       
    if(err || !user) return res.json({error:"Something went wrong"});
    user.membership = status;   
    user.save((err , result)=>{
      if(err) return res.json({error: err});
      else
      return res.json({info : "sucessfully Updated"});
    });
  })
  
}

exports.theme = (req, res)=>{
  User.findOne({_id :req.profile._id}, (err, user)=>{
    if(err || !user ){
      return res.json({
        error : "Something went wrong"
      });
    }else{
      user.appMode = !user.appMode;
      user.save((err, result)=>{
        if(err) return res.json({error: err});
        else {
          return res.json({
            status : "Theme sucessfully changed",
            info : result.appMode
          })
        }
      });
    }
  })
}

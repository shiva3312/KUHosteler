const User = require("../../models/user.js");
/// indian date-time system
var d = new Date();
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

// current_date is of 24h system .....
current_date = new Date(utc + (3600000*+5.5));

// current_date12 is 12h system
var current_date12 =  current_date.toLocaleString();


exports.userById =  (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};


exports.read = (req, res) => {
      req.profile.hashed_password = undefined;
      req.profile.salt = undefined;
      return res.json(req.profile);
};

exports.messActivity =  (req, res) =>{
    User.findById(req.profile._id, (err, user) =>{
      if(err|| !user){
        return res.status(400).json({ error: "User Not Found"})
      } else {
        if(user.messStatus == 0 ){
          return res.json({
            status: "Button is disabled",
            info : "Manager has turn off your Meal "})
        }
        else if(user.messStatus >=2) {
          user.messStatus ^= 1;
        }
         user.save((err)=>{
          if(err)  return res.status(501).json({ error: "Mess Status has not changed"})
          else {  return res.status(501).json({ error: "sucessfully changed"})}
        });
      }
    })
};

exports.helpdesk = (req, res)=>{
  User.findOne({hostelName: req.profile.hostelName, profileType : 1 }, (err , manager)=>{
    if(err || !manager) {
      return res.status(400).json({
        error: "unable to fectch data"
      });
    }else {
      return res.json(manager.helpSection);
    }
  })
}

exports.notice = (req, res)=>{
  User.findOne({hostelName: req.profile.hostelName, profileType : 1 }, (err , manager)=>{
    if(err || !manager) {
      return res.status(400).json({
        error: "unable to fetch data",
      });
    }else {
      return res.json(manager.notice);
    }
  })
}

exports.paymentRecord = (req, res) => {
      req.profile.hashed_password = undefined;
      req.profile.salt = undefined;
      return res.json(req.profile.payRecord);
};

exports.mealRecord = (req, res) => {
      req.profile.hashed_password = undefined;
      req.profile.salt = undefined;
      return res.json(req.profile.activity);
};


exports.setdob= (req,res)=>{
  User.findById(req.profile._id, (err, user)=>{
    if(err || !user ) {
      return res.json({error : "user not found"});
    }
    else {
      user.dob = req.body.date;
      user.save();
      return res.json({
        status : "DOB changed successfully",
        dob : user.dob
      })
    }
  })
}

exports.addguest = (req, res)=>{
const name = (req.body.name).toLowerCase();
const startDate = new Date(req.body.startDate);
const endDate = new Date(req.body.endDate);
const startoption = (req.body.startoption).toLowerCase();
const endoption = (req.body.endoption).toLowerCase();
const currentDate = new Date();

// these condition should satisfy to add guest
// user can only add  guest under 30 day
const todayDate = new Date(current_date) ;
const today30Ahead = new Date(todayDate.setDate(current_date.getDate()+30));
let validationUnder30day = ((startDate <= today30Ahead) && (endDate <= today30Ahead));


// user may enter wrong date .....
let startTOendDate = (startDate <= endDate);
// the day on which his membership is Deactivated
// var leavingDate = new  Date(req.user.leavingDate);
// let membershipaboutEnd =  (leavingDate >= startDate && leavingDate >= endDate) ;
let afterToday = ((currentDate < startDate) && (currentDate < endDate));

//creating a new guest from start date to end date
console.log( "1 :" + validationUnder30day + " 2:"+startTOendDate +"  3:"+ afterToday );
if(!(validationUnder30day && startTOendDate  && afterToday )) {
    res.json({error : "Invalid Date"});
} else {
  User.findOne({profileType:1, hostelName: req.profile.hostelName}, function(err, manager){
    if(err){
      console.log(err);
    }else{

  User.findById(req.profile._id, function(err, student) {
    if (err) {
      console.log(err);
    } else {
      var i = new Date(startDate);
      while (i <= endDate) {
        let newGuest;
        var pushDate = new Date(i);
        pushDate = pushDate.toString();

        if (i.getDate() == startDate.getDate() && i.getMonth() == startDate.getMonth() && i.getFullYear() == startDate.getFullYear()) {

          newGuest = {
            date: pushDate,
            guestHolderId: req.profile.id,
            name: name,
            mealStatus: 0,
            mealTime: startoption,
            morCharge: manager.guestMorMealCharge,
            nigCharge: manager.guestNigMealCharge,
          }
        } else if (i.getDate() == endDate.getDate() && i.getMonth() == endDate.getMonth() && i.getFullYear() == endDate.getFullYear()) {
          console.log("In end  " + i);
          newGuest = {
            date: pushDate,
            name: name,
            mealStatus: 0,
            guestHolderId: req.profile.id,
            mealTime: endoption,
            morCharge: manager.guestMorMealCharge,
            nigCharge: manager.guestNigMealCharge,
          }
        } else {
          console.log("in other date " + i);
          newGuest = {
            date: pushDate,
            guestHolderId: req.profile.id,
            name: name,
            mealStatus: 0,
            mealTime: 'm/n',
            morCharge: manager.guestMorMealCharge,
            nigCharge: manager.guestNigMealCharge,
          }
        }

        //Date increment by 1
        let incDate = i.setDate(i.getDate() + 1);
        i = new Date(incDate);
        // pushing guest of current user to his manager active list ..
        student.active_guest_list.push(newGuest);
      }

      //checking if current user member ship is still acitvated or not if not he can't add guest
        if(req.profile.membership ==  2)
          student.save(err, ()=>{
            if(err) {
              console.log(err);
            }
            else   return res.json({info : "Record successfully saved"});
          });
        else
        return res.json({error :"You are no longer member of This Hostel"});
        }
      });
    }
  })
}
};


exports.updateguest = (req, res)=>{
  const guestId = req.body.record;
  console.log(guestId);
    var  messTime = (req.body.messactivity).toLowerCase(); // req.body.messActivity : (N) / (M) / (M/N)
     User.findOneAndUpdate({_id:req.profile._id  ,active_guest_list: {$elemMatch: {_id: guestId}}}, {
       $set: {
         "active_guest_list.$.mealTime": messTime,
     } }, function(err , guestFound){
       if(err){
         console.log(err);
       }else{
        return  res.json({info : "Updated successfully"});
       }
     });
}


exports.removeguest = (req, res)=>{
  const guestId = req.body.record;
  User.findOneAndUpdate(req.profile._id , {$pull: {active_guest_list:{_id : guestId}}}, function(err , guestFound){
    if(err || !guestFound ){
       return res.json({
         error: "Somthing went wrong"
       })
    }else{
        return res.json({info :"Record Deleted successfully"});
    }
})
}


exports.theme = (req, res)=>{
  User.findOne(req.profile._id, (err, student)=>{
    if(err || !student ){
      return res.json({
        error : "Something went wrong"
      });
    }else{
      student.appMode = !student.appMode;
      student.save((err, result)=>{
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


exports.msgToManger = (req, res)=>{
return  res.send("hii");
}


exports.socialpost = (req, res)=>{
return  res.send("hii");
}


exports.annonymouspost = (req, res)=>{

return  res.send("hii");
}

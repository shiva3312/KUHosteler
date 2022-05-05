const User = require("../../models/user.js");
const BoundTime = require("../../models/boundTime.js");

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
      req.profile.image = undefined;
      return res.json(req.profile);
};

exports.getPreparedMealList = (req, res)=>{
    BoundTime.findOne({hotelName: req.profile.hostelName} , (err, manager)=>{
      if(err) {
        return res.json({error:err});
      }else{
        return res.json({
          borderMealList: manager.borderMealList,
          guestMealList : manager.guestMealList
        });
      }
    });
  }
const User = require("../../models/user.js");
const BoundTime = require("../../models/boundTime.js");
const { prepareMealList } = require("../../global/globalfunctions");
const boundTime = require("../../models/boundTime.js");

/// indian date-time system
var d = new Date();
var utc = d.getTime() + d.getTimezoneOffset() * 60000;

// current_date is of 24h system .....
current_date = new Date(utc + 3600000 * +5.5);

// current_date12 is 12h system
var current_date12 = current_date.toLocaleString();

// GET ROUTE funtions .............

exports.userById = async (req, res, next, id) => {
  await User.findById(id)
    .select("-image")
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "User not found",
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

exports.allstudents = (req, res) => {
  User.find({ hostelName: req.profile.hostelName, profileType: 0 })
    .select(
      "fname lname membership department messStatus hostelId active_guest_list"
    )
    .exec((err, users) => {
      if (err || !users) {
        return res.json({ error: "Unable to load student " });
      } else {
        res.json({ students: users });
      }
    });
};

exports.allemployee = (req, res) => {
  User.find({ hostelName: req.profile.hostelName, profileType: 2 })
    .select("fname lname membership salary ")
    .exec((err, users) => {
      if (err || !users) {
        return res.json({ error: "Somthing went wrong" });
      } else {
        res.json({ users: users });
      }
    });
};

exports.allReqList = (req, res) => {
  User.find({
    hostelName: req.profile.hostelName,
    profileType: 0,
    $or: [{ membership: 0 }, { membership: 5 }],
  })
    .select("fname lname membership department gender createdAt selfPhNo")
    .exec((err, students) => {
      if (err || !students) {
        return res.json({ error: "Somthing went wrong with students List" });
      } else {
        User.find({
          hostelName: req.profile.hostelName,
          profileType: 2,
          $or: [{ membership: 0 }, { membership: 5 }],
        })
          .select("fname lname membership gender createdAt selfPhNo")
          .exec((err, employees) => {
            if (err || !employees) {
              return res.json({
                error: "Somthing went wrong with employee list",
              });
            } else {
              res.json({ employees, students });
            }
          });
      }
    });
};

exports.studpayRecord = (req, res) => {
  User.find({ _id: req.body.stuId }, (err, users) => {
    if (err || !users) {
      return res.json({ error: "Somthing went wrong" });
    } else {
      return res.josn({ users: users.payRecord });
    }
  });
};

exports.gethelpSection = (req, res) => {
  return res.json({ helpSection: req.profile.helpSection });
};
exports.notice = (req, res) => {
  return res.json({ notice: req.profile.notice });
};
exports.abouthostel = (req, res) => {
  return res.json({ abouthostel: req.profile.abouthostel });
};

exports.getCharges = (req, res) => {
  return res.json({
    guestMorMealCharge: req.profile.guestMorMealCharge,
    guestNigMealCharge: req.profile.guestNigMealCharge,
    grandCharge: req.profile.grandCharge,
    newChargelist: req.profile.newChargelist,
  });
};

exports.getPreparedMealList = (req, res) => {
  boundTime.findById(req.profile._id, (err, manager) => {
    if (err) {
      return res.json({ error: err });
    } else {
      return res.json({
        borderMealList: manager.borderMealList,
        guestMealList: manager.guestMealList,
      });
    }
  });
};

exports.getAllGuest = (req, res) => {
  User.find({ hostelName: req.profile.hostelName }, (err, users) => {
    if (err || !users) {
      return res.json({ error: "Somthing went wrong" });
    } else {
      var allListedGuest = [];
      var allactivatedGuest = [];
      users.forEach((user) => {
        user.active_guest_list.forEach((guest) => {
          let newGuest = {
            _id: guest._id,
            holderId: user._id,
            name: guest.name,
            guestType: user.profileType,
            holderName: user.fname + user.lname,
            holderDeapartment: user.department,
            holderMobNo: user.selfPhNo,
            holderRoomNo: user.roomNo,
            mealDate: guest.date,
          };
          if (guest.mealStatus === false) {
            allListedGuest.push(newGuest);
          } else {
            allactivatedGuest.push(newGuest);
          }
        });
      });
      return res.json({
        allListedGuest,
        allactivatedGuest,
      });
    }
  });
};

// POST ROUTE funtions .............

exports.msgToAllSturent = (req, res) => {};

exports.socialpost = (req, res) => {};

exports.annonymouspost = (req, res) => {};

exports.sethelpSection = (req, res) => {
  const newPerson = {
    tag: req.body.tag,
    name: req.body.name,
    description: req.body.description,
    about: req.body.about,
    contact: {
      phNo: req.body.phNo,
      email: req.body.email,
    },
  };

  User.findOne({ _id: req.profile._id }, (err, user) => {
    if (err || !user) {
      return res.json({ error: "somthing went wrong" });
    } else {
      user.helpSection.push(newPerson);
      user.save((err, result) => {
        if (err) return res.json(err);
        else {
          return res.json({ info: "successfully added" });
        }
      });
    }
  });
};

// PUT ROUTE funtion ..............

exports.editProfile = (req, res) => {};

exports.setCharges = (req, res) => {
  User.findOne({ _id: req.profile._id }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "Something went wrong",
      });
    } else {
      user.guestMorMealCharge = req.body.guestMorMealCharge;
      user.guestNigMealCharge = req.body.guestNigMealCharge;
      user.grandCharge = req.body.grandCharge;
      user.save();

      //  update charge into boundTime collection
      BoundTime.findById(req.profile._id, (err, manager) => {
        if (err || !manager) return res.json({ err: "something went wrong" });
        manager.guestMorMealCharge = user.guestMorMealCharge;
        manager.guestNigMealCharge = user.guestNigMealCharge;
        manager.grandCharge = user.grandCharge;
        manager.save((err, result) => {
          if (err) return res.json({ error: err });
          else {
            return res.json({
              info: "cost updated sucessfully",
            });
          }
        });
      });
    }
  });
};

//addAuditCharges
exports.addAuditCharges = async (req, res) => {

  // converting month-year in Date format ( Ex. 2022-06 to Fri Jun 01 2022 )
  const d = new Date(req.body.auditedDate);
  // converting date in month year using to string formate ( Ex. Fri Jun 01 2022 to  Jun 2022)
  const auditedDate = d.toDateString().slice(4, 7) + " " + d.toDateString().slice(11, 15);
  req.body.auditedDate = auditedDate;

  // calculating total charge ( total = sum of all money expenditure)
  req.body.total = parseInt(req.body.gas) +
    parseInt(req.body.vegitables) +
    parseInt(req.body.groceryEggRice) +
    parseInt(req.body.fish) +
    parseInt(req.body.meat) +
    parseInt(req.body.miscelleanous) +
    parseInt(req.body.cable) +
    parseInt(req.body.paper);
  // Calculation of total Meal charge for the month ....
  // (TotalMealChargeForTheMonth  =  effective money expenditure)
  req.body.TotalMealChargeForTheMonth = req.body.total -
    parseInt(req.body.less) -
    parseInt(req.body.lessGuestCollection);

  // claculation of perHead meal charge ...
  req.body.mealChargePerBoarder = req.body.TotalMealChargeForTheMonth / parseInt(req.body.totalNumberOfBoarders);
  // roundoff charge ...
  req.body.RoundOffCharge = Math.ceil(parseInt(req.body.mealChargePerBoarder))

  //check if the monthYeal exist in the mealInfoList
  // if not exist the return unable to change... 


  //update record in the mealinfo list with MonthYear serarch
  const isSuccess = await User.findOneAndUpdate({
    _id: req.profile._id,
    mealInfoList: { $elemMatch: { auditedDate } },
  },
    {
      $set: {
        "mealInfoList.$.auditedDate": auditedDate,
        "mealInfoList.$.statementOfMealCharge": req.body,
        "mealInfoList.$.perheadCharge": req.body.RoundOffCharge

      }
    }
  );

  if (!isSuccess) {
    return res.json({ error: "No match of monthYear" })
  }

  const date = new Date().toDateString();
      var newRec = {
        auditedMonthYear: auditedDate,
        auditDate: date,
        auditAmount: req.body.RoundOffCharge
      };
  let conditions = { hostelName: req.profile.hostelName, profileType: 0 };
  let update = newRec;
  let options = { multi: true, upsert: true };

  // pull all matched records in corressponding hostel
  await User.updateMany({ hostelName: req.profile.hostelName, profileType: 0, }, { $pull: { paymentRecord: { auditedMonthYear: auditedDate } } }, options);

  //update perHead roundoff charge in every student of corresponding hostel 
  await User.updateMany(conditions, { $push: { paymentRecord: update } }, options);


  return res.json({ status: "success" });


};

//addFineOrDepositMoney
exports.addFineOrDepositMoney = (req, res) => {
  const userId = req.body.stuId;
  const fine = req.body.fine;
  const reason = req.body.reason;
  const deposit = req.body.deposit;
  User.findById(userId, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "User Not Found" });
    } else {
      // if  it is fine ...
      date = new Date().toDateString();
      const newRec = {
        auditDate: date,
        auditAmount: 0,
        totalFine: fine,
        fineReason: reason,
        paid: deposit,
      };
      user.paymentRecord.push(newRec);

      // add this fine to mealInfo list fine....
      const d = new Date();
      const auditedDate =
        d.toDateString().slice(4, 7) + " " + d.toDateString().slice(11, 15);
      var recId;
      var totalFine = 0;

      //find manager to push data....
      req.profile.mealInfoList.forEach((rec) => {
        if (rec.auditedDate == auditedDate) {
          recId = rec._id;
          totalFine += rec.totalFine;
        }
      });

      totalFine += fine;
      // set amount in manger mealInfoList ....
      User.findOneAndUpdate(
        { _id: req.profile._id, mealInfoList: { $elemMatch: { _id: recId } } },
        {
          $set: {
            "mealInfoList.$.totalFine": totalFine,
          },
        },
        function (err, guestFound) {
          if (err) {
            return res.json({ error: "This month has not meal records" });
          }
        }
      );

      //saving the user...
      user.save((err) => {
        if (err)
          return res
            .status(501)
            .json({ error: "Some error, Amount not saved " });
        else {
          return res.status(200).json({ info: "sucessfully saved" });
        }
      });
    }
  });
};

exports.setboundtime = (req, res, next) => {
  User.findOne({ _id: req.profile._id }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "Something went wrong",
      });
    } else {
      user.morBoundTime = req.body.morBoundTime;
      user.nigBoundTime = req.body.nigBoundTime;
      user.save();

      //update charge into boundTime collection
      BoundTime.findById(req.profile._id, (err, manager) => {
        if (err || !manager) return res.json({ err: "something went wrong" });
        manager.morBoundTime = user.morBoundTime;
        manager.nigBoundTime = user.nigBoundTime;
        manager.save((err, result) => {
          if (err) return res.json({ error: err });
          return res.json({
            status: "Time updated sucessfully",
          });
        });
      });
    }
  });
};

exports.setmessActivity = (req, res) => {
  User.findById(req.profile._id, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "User Not Found" });
    } else {
      user.messStatus ^= 2;
      user.save((err) => {
        if (err)
          return res.status(501).json({ error: "Mess Status has not changed" });
        else {
          return res.status(501).json({ error: "sucessfully changed" });
        }
      });
    }
  });
};

exports.fchangeMealStatus = (req, res) => {
  const stuId = req.body.values.stuId;
  const status = req.body.values.status;
  User.findOne({ _id: stuId }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "Something went wrong",
      });
    } else {
      user.messStatus = status;
      user.save((err, result) => {
        if (err) return res.json({ error: err });
        else {
          return res.json({
            info: "Successfully Changed",
          });
        }
      });
    }
  });
};

exports.setstudetnHostelId = (req, res) => {
  const userId = req.body.stuId;
  const hostelId = req.body.hostelId;
  User.findOneAndUpdate(
    { _id: userId },
    { $set: { hostelId: hostelId } },
    function (err, result) {
      if (err) {
        return res.json({ error: err });
      } else {
        return res.json({
          info: "Hostel id updated successfully",
        });
      }
    }
  );
};

exports.updateMembershipStatus = async (req, res) => {
  const status = req.body.values.status;
  const userId = req.body.values.memId;

  //If status is changed to Exboder(3) then remove all guest from active_guest_list 
  if (status === 3) {
    await User.updateOne({ _id: userId}, { $set: { 'active_guest_list': [] } })
  }
  //updating membership status
   User.findById({ _id: userId }, (err, user) => {
    if (err || !user) return res.json({ error: "Something went wrong" });
     user.membership = status; 
    user.save((err, result) => {
      if (err) return res.json({ error: err });
      else return res.json({ info: "sucessfully Updated" });
    });
  });
};

exports.updateGuestMealStatus = (req, res) => {
  const guestId = req.body.values.guestId;
  const userId = req.body.values.userId;
  const status = req.body.values.status;

  User.findOneAndUpdate(
    { _id: userId, active_guest_list: { $elemMatch: { _id: guestId } } },
    {
      $set: {
        "active_guest_list.$.mealStatus": status,
      },
    },
    function (err, result) {
      if (err) {
        return res.json({ error: err });
      } else {
        return res.json({ info: result });
      }
    }
  );
};

exports.removeguest = (req, res) => {
  const guestId = req.body.values.guestId;
  const userId = req.body.values.userId;

  User.findOneAndUpdate(
    { _id: userId },
    { $pull: { active_guest_list: { _id: guestId } } },
    function (err, result) {
      if (err) {
        return res.json({ error: err });
      } else {
        return res.json({ info: result });
      }
    }
  );
};

exports.theme = (req, res) => {
  User.findOne({ _id: req.profile._id }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "Something went wrong",
      });
    } else {
      user.appMode = !user.appMode;
      user.save((err, result) => {
        if (err) return res.json({ error: err });
        else {
          return res.json({
            status: "Theme sucessfully changed",
            info: result.appMode,
          });
        }
      });
    }
  });
};



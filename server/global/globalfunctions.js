const User= require('../models/user');
const boundTime = require('../models/boundTime');
var mongoose = require('mongoose');


// indian date-time system
var d = new Date();
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
// current_date is of 24h system .....
var current_date = new Date(utc + (3600000*+5.5));
// current_date12 is 12h system
var current_date12 =  current_date.toLocaleString();
const isMorning = current_date.getHours >=1 && current_date.getHours<=11;


exports.prepareMealList =async (hostelName)=>{
  boundTime.findOne({hostelName:hostelName},(err, manager)=>{
    // free up borderMealList the meal list beforing saving new meal list 
    manager.borderMealList.forEach((rec)=>{
      boundTime.findOneAndUpdate({hostelName: hostelName},
        { $pull: { borderMealList: { _id : rec._id }}}, function(err, guestFound){});  
    });
    // free up guestMealList the meal list beforing saving new meal list 
    manager.guestMealList.forEach((rec)=>{
      boundTime.findOneAndUpdate({hostelName: hostelName},
        { $pull: { guestMealList: { _id : rec._id }}}, function(err, guestFound){});  
    });
   
    if(err) console.log(err);
    else {     
      User.find({hostelName:hostelName}, (err , students)=>{
        if(err) console.log(err);
        else{             
          // if messStatus is on (3)   and student is member of the hostel (membership = 2) then push data
          students.forEach((student)=>{            
            if(student.messStatus == 3 && student.membership == 2){              
              let rec = {
                _id : new mongoose.Types.ObjectId(),
                fname : student.fname,
                lname : student.lname,
                avatar: student.avatar,                
                department : student.department,
                roomNo : student.roomNo  
              }                         
              manager.borderMealList.push(rec);              
            }
            student.active_guest_list.forEach((guest)=>{
              const currDateInString = current_date.toDateString();
              console.log(currDateInString.slice(0,15) , " --- " , guest.date.slice(0,15));
              console.log(currDateInString.slice(0,15) === guest.date.slice(0,15));
              console.log(isMorning && guest.mealTime == "night");
              // if time is morning and gues mealTime is night then don't push the records otherwise push in all cases
                if(!(isMorning && guest.mealTime == "night")){
                if(currDateInString.slice(0,15) === guest.date.slice(0,15) && guest.mealStatus == 1){
                  let newGuestRec = {
                    _id :new mongoose.Types.ObjectId(),
                    name : guest.name,
                    guestHolder : student.fname + " " + student.lname ,
                    guestType: student.profileType
                  }
                  manager.guestMealList.push(newGuestRec);                 
                }}                
            });            
          });
        }
        manager.save((err)=>{
          if(err){
            console.log(err);
          }
        });
      });   
    }
  });
}

exports.pushMealRecords = async (hostelName , guestMorCharge, guestNigCharge , grandCharge) => {
var morCharge = 0
var nigCharge = 0;
  //push morning
User.find({
  profileType: 0,
  hostelName: hostelName,
  membership : 2
  }, function(err, Allstudent) {
 console.log(Allstudent);
  var curr_date = current_date.toString();
  var push_date = curr_date.slice(0, 15);
  Allstudent.forEach(function(student) {
    console.log("each student getting access");
  ///////////////////////////////////////////////// MORNING ////////////////////////////////////////////////////////////
if (0)
{
    console.log("moringing loop runs ");
      //if current boarder has mess_status on then push morning charnge else set morning charge 0
      var morning_charge=0;
      var meal_status;

      if (student.messStatus == 3) {
        morning_charge = morCharge;
        meal_status = 'morning';
      } else {
        morning_charge = 0;
        meal_status = 'off'
      }


      var newRecord = {
        date: push_date,
        fine: [],
        mess_status: meal_status,
        morning_charge: morning_charge,
        night_charge: 0,
        this_day_guest: []
      }

      // searching  today  guest for corresponding student if( guest.guestHolderId == student._id) then
      student.active_guest_list.forEach(function(guest) {

        var date = new Date(guest.date);
        var dateValidation = current_date.getDate() == date.getDate() && current_date.getMonth() == date.getMonth();
        var mealshiftValidation = (guest.mealTime == 'morning' || guest.mealTime == 'on');

        console.log(dateValidation +" "+mealshiftValidation);

        if (dateValidation  && mealshiftValidation) {

          var guestName = guest.name;
          var guestId = guest._id;

          var newGuest = {
            guestId : guestId,
            name: guestName,
            morning_charge: guestMorCharge,
            night_charge: 0
          }
          newRecord.this_day_guest.push(newGuest);
        }

         var  guestDate = (guest.date).slice(0,15)
        if (guest.mealTime == 'morning' && guestDate == push_date) {
          // if guest.activity == 'morning' then pull the guest from manager.active_guest_list
          User.findOneAndUpdate({
            _id: student._id,
          }, {
            $pull: {
              active_guest_list: {
                _id: guest._id
              }
            }
          }, function(err, guestFound) {});

        } else if (guest.mealTime == 'on' && guestDate == push_date) {
          //if guest.activity == 'on' then  update the guest details from manager.active_guest_list
          User.findOneAndUpdate({ _id: student._id,active_guest_list: { $elemMatch: { _id: guest._id  } } }, {
            $set: {
              "active_guest_list.$.mess_activity": 'night',
            }
          }, function(err, guestFound) {});
        }

      })
      console.log(newRecord);
      student.activity.push(newRecord);
      console.log("--------------------------------New records is saved  ------------------------------------------------");
      console.log(newRecord);
      student.save();


    }

/////////////////////////////////////////////////   NIGHT   ///////////////////////////////////////////////////////////



     else {

      var mealStatus ;
      var morningCharge=0;
      var nightCharge=0;
      var newRecord;
      var alltodayguest =[]; //ager checking all today guest push this in this_day_guest of newRecord
      var allPushedGuest_In_ActiviyRecord = []; // this will temporay hold all current date guest whose morning record pushed

      var pushDate = new Date(push_date);

      console.log("-----------------------------------------"+student.name  + " ----------------------------------------");
        var recordFoundLock = 0;

      student.activity.forEach((record, i) => {


        var recordDate = new Date(record.date);

        if(record.date == push_date ){
           recordFoundLock =1;

          console.log("-------------------- Status / charges ( In IFF )  ----------------------");
          console.log(morCharge);
          console.log(nigCharge);
          console.log(guestMorCharge);
          console.log(guestNigCharge);


          console.log(record.mess_status +" "+  student.messStatus);
          if ( record.mess_status == 'morning' && student.messStatus == 3) {
            console.log("In 1st IF");
            morningCharge = morCharge;
            mealStatus = 'on';
            nightCharge = nigCharge;
          }
          else if (record.mess_status == 'morning' && student.messStatus != 3) {
            console.log("In 2nd IF");

            morningCharge = morCharge;
            mealStatus = 'morning';
            nightCharge = 0;
          }
          else if (record.mess_status == 'off' && student.messStatus == 3) {
            console.log("In 3rd IF");

            morningCharge = 0;
            mealStatus = 'night';
            nightCharge = nigCharge;
          }
          else if (record.mess_status == 'off' && student.messStatus != 3) {
            console.log("In 4th IF");

            morningCharge = 0;
            mealStatus = 'off';
            nightCharge = 0;
          }


           newRecord = {
              date: push_date,
              fine: [],
              mess_status: mealStatus,
              morning_charge: morningCharge,
              night_charge: nightCharge,
              this_day_guest: []
            }



          record.this_day_guest.forEach(function(pushedGuest){
            allPushedGuest_In_ActiviyRecord.push(pushedGuest);
          })




          student.active_guest_list.forEach((guest, i) => {
            var date = new Date(guest.date);
            var dateValidation = current_date.getDate() == date.getDate() && current_date.getMonth() == date.getMonth();
            var mealshiftValidation = (guest.mealTime == 'night' );
            var lock =0; // if lock is 0 this outer data will be pusher other wise id is matched and inner data will be pushed
            if (dateValidation && mealshiftValidation){
                var guestName = guest.name;
                allPushedGuest_In_ActiviyRecord.forEach(function(pushedGuest,i){
                        if(pushedGuest.guestId == guest._id ){
                              var newGuest = {
                                name: guestName,
                                morning_charge: guestMorCharge,
                                night_charge: guestNigCharge
                              }
                              alltodayguest.push(newGuest);
                              allPushedGuest_In_ActiviyRecord.splice(i,1)
                              lock =1;
                              return;
                        }


                          })

                          if(lock == 0){
                                var newGuest = {
                                  name: guestName,
                                  morning_charge: 0,
                                  night_charge: guestNigCharge
                                }
                                alltodayguest.push(newGuest);
                              }



                          //delete all the whose date == pushed date .........
                            User.findOneAndUpdate({ _id: student._id},
                            { $pull: { active_guest_list: { _id : guest._id }}}, function(err, guestFound){});

                        }

                      });


                      // push all record which is left in (allPushedGuest_In_ActiviyRecord) in (alltodayguest)
                      allPushedGuest_In_ActiviyRecord.forEach((guest, i) => {

                        var newGuest = {
                          name: guest.name,
                          morning_charge: guest.morning_charge,
                          night_charge: guest.night_charge
                        }
                        alltodayguest.push(newGuest);

                      });


                  //delete morning record and insert new morning-night record ........

                  return;
                }

                //if student has registerd at night and mornig push record is done ...-----------------------------------.


            });

            if(recordFoundLock == 0){

                // create new student record
                if (student.messStatus == 3) {
                  morningCharge = 0;
                  mealStatus = 'night';
                  nightCharge = nigCharge;
                }
                else {
                  morningCharge = 0;
                  mealStatus = 'off';
                  nightCharge = 0;
                }

                newRecord = {
                   date: push_date,
                   fine: [],
                   mess_status: mealStatus,
                   morning_charge: morningCharge,
                   night_charge: nightCharge,
                   this_day_guest: []
                 }

            }

          User.findOneAndUpdate({ _id: student._id }, { $pull: {activity: { date: push_date } }}, function(err, guestFound) {});
          alltodayguest.forEach(function(guest){newRecord.this_day_guest.push(guest);})
          console.log("--------------------------------New records is saved  ------------------------------------------------");
          console.log(newRecord);
          student.activity.push(newRecord);
          student.save();
          return;
          }
        })

});
};

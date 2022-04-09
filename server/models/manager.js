
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Manager = new Schema({
  _id: { type: Schema.Types.ObjectId  },
  abouthostel :{},
  messChargeType: Boolean, // 0 ( perday charge) 1 (permonth charge)

  //payment records
  payRecord: [{  auditDate : String, auditAmount:Number, totalFine :Number,due: Number , paid:Number }],
  //committee member
    committeeMember: [{ membeberId:ObjectId, tag:String }],
  //staff
    staff: [{staffId : ObjectId, tag:String }],
  //notice  / fest
    notice: [{ title: String , text: String, description:String , date : {type:Date , default:Date.now}}],
  //students
    student :[{studentId: String }],

    
  //other
  notification: { type :Number, default:0},

  //mess
   //use binary concept (00 to 11) right bit for forced off / left bit for student messStatus
   messStatus:{ type :Number, default:1},
   morBoundTime: String,
   nigBoundTime: String,

     //Records
     mealInfoList:[{
        auditedDate: String,
        perheadCharge:{ type :Number, default:0},
        totalMeal:{ type :Number, default:0},
        mealCountList :{
          morOnly:{ type :Number, default:0},
          nigOnly:{ type :Number, default:0},
          morNig :{ type :Number, default:0},
          off: { type :Number, default:0},
        }
      }],
      salary:{ type :Number, default:0},
  
  //charge
  guestMorMealCharge:{ type :Number, default:0},
  guestNigMealCharge:{ type :Number, default:0},
  grandCharge : { type :Number, default:0},
  newChargelist:[{
  tag:String,      // tag => fine / fest ...etc
  Title:String,
  description:String,
  amount:{ type :Number, default:0},
}],
//setting
appMode : { type :Boolean, default:false}, // dark or light
font:String,


});

module.exports = mongoose.model('boundTime', Manager);

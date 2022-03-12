const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid').v1;

const { ObjectId } = mongoose.Schema;


const userSchema = new mongoose.Schema({

//Basic info
  name : { type: String, require : [true , 'Name is required'] },
  email :{ type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true } ,
  hashed_password : String,
  salt:String,
  hostelName:{type: String, required: true },
  department: String,
  joiningDate: String,
  tag: String,  //diff type of tag ( maintanance , mess-prefect... etc)
  roomNo: Number,
  gender: String,
  religion:String,
  dob: String,
  university:String,

  //contact
  guardian :String,
  gPhNo :String,
  selfPhNo:String,
  address: String,
  image:String,
  bio: String,
  hostelId:String,
  membership:  { type :Number, default:0}, // notMember(0)| officalGuest(1) | member(2) | WasMember(3) | rejected Request(4)

  //other
  notification: { type :Number, default:0},
  salary:{ type :Number, default:0},
  profileType: Number ,  // 0 student , 1 manager , 2 emplyee , 3 developer
  abouthostel :{},

//Meal
  mealPreference :[{day:String, morning: [{choice:String }], night:[{choice:String }]}],

//each day activity of student
  activity: [{
  date: String,
  fine: [{ reason : String, charge: Number}],
  mess_status: String,
  morning_charge: Number,
  night_charge: Number,
  this_day_guest: [{
    guestId:String,
    name: String,
    morning_charge: Number,
    night_charge: Number
  }]
}],

//active Guest list
  active_guest_list: [{
      date: String,
      guestHolderId: {type: ObjectId , ref:'user'},
      mealStatus : Boolean, // activated(0) or Listed(1)
      mealTime:String, // moring & Night | night |mor | OFF
      name: String,
      morCharge: { type :Number, default:0},
      nigCharge: { type :Number, default:0}
    }],


//payment records
  payRecord: [ { auditDate : String, auditAmount:Number, totalFine :Number,due: Number , paid:Number }],
  //committee member
    committeeMember: [{ membeberId:ObjectId, tag:String }],
  //staff
    staff: [{staffId : ObjectId, tag:String }],
  //notice  / fest
    notice: [{ title: String , text: String, description:String , date : {type:Date , default:Date.now}}],
  //students
    student :[{studentId: String }],

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

  //helpdesk
      helpSection:[{
      tag: String,   // provost / vc / stewrd .... etc
      name:String,
      description:String,
      about:String,
      conatct : {
        phNo:String,
        email:String,
        }
    }],

  //default menu for mess
     other:[{ type:Array,  default:[] }],

//setting
  appMode : Boolean, // dark or light
  font:String,

} ,  { timestamps: true } );




// virtual field
userSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};


module.exports = mongoose.model('User',userSchema);

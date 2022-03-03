const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid').v1;

const { ObjectId } = mongoose.Schema;


const userSchema = new mongoose.Schema({

//Basic info
  name : { type: String, require : [true , 'Title is required'] },
  email :{ type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true } ,
  hashed_password : String,
  salt:String,
  hostelName:{type: String, required: true },
  department: String,
  joiningDate: Date,
  tag: String,  //diff type of tag ( maintanance , mess-prefect... etc)
  roomNo: Number,
  gender: String,
  religion:String,
  dob: Date,
  university:String,

  //contact
  guardian :String,
  gPhNo :String,
  selfPhNo:String,
  address: String,
  image:String,
  bio: String,
  hostelId:String,
  membership:  { type :Number, default:0}, // notMember(0)| officalGuest(1) | member(2) | WasMember(3)

  //other info
  notification: { type :Number, default:0},
  salary:{ type :Number, default:0},
  profileType: Number ,  // 0 student , 1 manager , 2 staff , 3 developer

//Meal
  mealPreference :[{day:String, morning: [{choice:String }], night:[{choice:String }]}],
  activity: [{
      date: Date,
      fine: [{ reason : String, charge:  { type :Number, default:0}}],
      mealTime: String,  //moring & Night | night |mor | OFF
      guests: [{
      guestId:String,
      name: String,
      morCharge:  { type :Number, default:0},
      nigCharge:  { type :Number, default:0}
    }]
  }],

//active Guest list
  active_guest_list: [{
      date: Date,
      guestHolderId: {type: ObjectId , ref:'user'},
      mealStatus : Boolean, // activated(0) or Listed(1)
      mealTime:String, // moring & Night | night |mor | OFF
      name: String,
      morCharge: { type :Number, default:0},
      nigCharge: { type :Number, default:0}
    }],


//payment records
  payRecord: [ { date : Date, due: Number , paid:Number }],
  //committee member
    committeeMember: [{ membeberId:ObjectId, tag:String }],
  //staff
    staff: [{staffId : ObjectId, tag:String }],
  //notice  / fest
    notice: [{ title: String , text: String, description:String , date : {type:Date , default:Date.now}}],
  //students
    student :[{studentId: ObjectId }],
  //mess
    messStatus:{ type :Boolean, default:true},
    morBoundTime: { type :Date},
    nigBoundTime:{ type :Date},

  //Records
    mealInfoList:[{
      auditedDate: { type :Date, default:Date.now },
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
      helpSection:{
      tag: String,   // provost / vc / stewrd .... etc
      conatct : {
        phNo:String,
        email:String,
        },
      name:String,
      about:String,
    },

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

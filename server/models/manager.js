const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({

//Basic info
  name : {
        title:{ type: String, require : [true , 'Title is required'] },
        fname :{ type:String , trim: true , require : [true , 'First Name is required'] , maxlength:32},
        mname:{ type:String , trim: true  , maxlength:32 },
        lname:{ type:String , trim: true , require : [true , 'Last Name is required'] , maxlength:32 }
      },
  email :{ type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true } ,
  hashed_password : String,
  hostelName:String,
  gender: String,
  relegion:String,
  dob: Date,
  university:String,
  image:String,
  about: String,
  salary:{ type :Number, default:0},


//contact
  selfPhNo:String,
  address: String,

//Meal
  notification:{ type :Number, default:0},

//active Guest list
  active_guest_list: [{
      date: Date,
      guestHolderId: ObjectId,
      mealStatus : Boolean, // activated(0) or Listed(1)
      mealTime:String, // moring & Night | night |mor | OFF
      name: String,
      morCharge: { type :Number, default:0},
      nigCharge: { type :Number, default:0}
    }],



//post
  postTOF :[{
    postType: Boolean, // public | archive
    date:{ type :Date, default:Date.now},
    title:String ,
    content:String,
    image:String ,
    likes:{ type :Number, default:0} ,
    dislike:{ type :Number, default:0} ,
    comments :[{
      date : { type :Date, default:Date.now},
      userId : ObjectId,
      comments:String,
    }]
    }],

//post
  postAnny:[{
    date:{ type :Date, default:Date.now},
    title:String ,
    content:String,
    image:String ,
    likes:{ type :Number, default:0} ,
    dislike:{ type :Number, default:0}
  }],

//notice  / fest
  notice: [
    type :Array,
    default:[]
  ],

//students
  student :[{
    studentId: ObjectId,
  }],


//committee member
  committeeMember: [{
    membeberId:ObjectId,
    tag:String
  }],

//staff
  staff: [{
    staffId : ObjectId,
    tag:String
  }],


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
other:[{
  type:Array,
  default:[]
}]


//setting
  appMode : { type :Boolean, default:false}, // dark or light
  font:String,

} {timestamps:true} );

module.exports = mongoose.model('manager', managerSchema)

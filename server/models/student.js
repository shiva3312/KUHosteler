const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

//Basic info
  name : {
        title:{ type: String, require : [true , 'Title is required'] },
        fname :{ type:String , trim: true , require : [true , 'First Name is required'] , maxlength:32},
        mname:{ type:String , trim: true  , maxlength:32 },
        lname:{ type:String , trim: true , require : [true , 'Last Name is required'] , maxlength:32 }
      },
  email :{ type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true } ,
  hashed_password : String,
  hostelName:{type: String, required: true },
  department: String,
  joiningDate: Date,
  tag: String,  //diff type of tag ( maintanance , mess-prefect... etc)
  roomNo: Number,
  gender: String,
  relegion:String,
  dob: Date,
  university:String,
  //contact
  guardian :String,
  gPhNo :String,
  selfPhNo:String,
  address: String,
  image:String,
  about: String,
  hostelId:String,
  membership:  { type :Number, default:0}, // notMember(0)| officalGuest(1) | member(2) | WasMember(3)

//Meal
  morMealPreference: [{choice:String }],
  nigMealPrefercnce:  [{choice:String }],
  notification: { type :Number, default:0},
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
      guestHolderId: ObjectId,
      mealStatus : Boolean, // activated(0) or Listed(1)
      mealTime:String, // moring & Night | night |mor | OFF
      name: String,
      morCharge: { type :Number, default:0},
      nigCharge: { type :Number, default:0}
    }],




//payment records
  payRecord: [ { date : Date, due: Number , paid:Number }],


//post
  postTOF :[{
    postType: Boolean, // public | archive
    date:Date,
    title:String ,
    content:String,
    image:String ,
    likes:{ type :Number, default:0} ,
    dislike:{ type :Number, default:0} ,
    comments :[{
      date : Date,
      userId : ObjectId,
      comments:String,
    }]
    }],

  postAnny:[{
    date:Date,
    title:String ,
    content:String,
    image:String ,
    likes:{ type :Number, default:0} ,
    dislike:{ type :Number, default:0}
  }],

//setting
  appMode : Boolean, // dark or light
  font:String,

}   { timestamps: true } );


module.exports = mongoose.model('student',studentSchema )

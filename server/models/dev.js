const mongoose = require('mongoose');

const devSchema = new mongoose.Schema({

//Basic info
  name : {
        title:{ type: String, require : [true , 'Title is required'] },
        fname :{ type:String , trim: true , require : [true , 'First Name is required'] , maxlength:32},
        mname:{ type:String , trim: true  , maxlength:32 },
        lname:{ type:String , trim: true , require : [true , 'Last Name is required'] , maxlength:32 }
      },
  email :{ type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true } ,
  hashed_password : String,

//bug
bug :[{
  checked:{type : Boolean, default:0},
  userId:ObjectId,
  message:String,
}],


//reports
  report :[{
    checked:{type : Boolean, default:0},
    userId:ObjectId,        //perosn who is reporting
    targetUserId : ObjectId, // perons for whome any use reported
    message:String,
  }],

//setting
  appMode : { type :Boolean, default:false}, // dark or light
  font:String,

} {timestamps:true} );

module.exports = mongoose.model('devloper', staffSchema)

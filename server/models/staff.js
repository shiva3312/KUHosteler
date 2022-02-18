const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({

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
  membership:  { type :Number, default:0}, // notMember(0)| notPermanent(1) | PermanentMember(2) | WasMember(3)
  salary:{ type :Number, default:0},


//contact
  selfPhNo:String,
  address: String,

//Meal
  notification:{ type :Number, default:0},

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



//default menu for mess
other:[{
  type:Array,
  default:[]
}]


//setting
  appMode : { type :Boolean, default:false}, // dark or light
  font:String,

} {timestamps:true} );

module.exports = mongoose.model('staff', staffSchema)

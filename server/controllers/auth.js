const formidable = require('formidable');
const gravatar = require('gravatar');
const normalize = require('normalize-url');
const _ = require('lodash');
const fs = require('fs');
const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt'); // for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');
const boundTime = require('../models/boundTime');
const Admin = require('../models/admin');
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const JWT_SECRET = "some super serect";
const sharp = require('sharp');






exports.userById = async (req, res, next, id) => {
    await  User.findById(id).exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: 'User not found'
                });
            }
            req.profile = user;
          
            next();
        });
    };

exports.image = (req, res, next) => {
    if (req.profile.image.data) {
        res.set('Content-Type', req.profile.image.contentType);
        return res.send(req.profile.image.data);
    }
    next();
};
    


// using promise
exports.signup = (req, res) => {
    const newGravatar = normalize(
        gravatar.url(req.body.email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );
   
    req.body.avatar = newGravatar;
    
    if(req.body.profileType == 1){
        req.body.membership= 2;
    }
    const user = new User(req.body);
    console.log("req.body", req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                // error: errorHandler(err)
                error: 'Email is taken'
            });
        }
       
           //setting bound time in bound time databases
        if(user.profileType == 1){
            const newMnagerInboudDB = new boundTime({
              _id : user._id,
              morBoundTime: '06:00',
              nigBoundTime: "06:00",
              hostelName: user.hostelName,
              guestMorMealCharge:50,
              guestNigMealCharge: 50,
              grandCharge: 150,
              lock:true
            })
            newMnagerInboudDB.save();
          }


            //delet the used code and inset new code 
            let newCode = (Math.random() + 1).toString(36).substring(7); 
            //pull the code 
            Admin.findOneAndUpdate({},{ $pull: { codes: { code : req.body.code }}}, function(err, res){});  
            //push new code 
            Admin.findOne({},(err, admin)=>{
                if(err){
                    console.log(err);
                }else {
                    admin.codes.push({code:newCode});
                    admin.save();                    
                }
            })
            
            user.salt = undefined;
            user.hashed_password = undefined;
            res.json({user});
    });

};

// // using async/await
// exports.signup = async (req, res) => {
//     try {
//         const user = await new User(req.body);
//         console.log(req.body);

//         await user.save((err, user) => {
//             if (err) {
//                 // return res.status(400).json({ err });
//                 return res.status(400).json({
//                     error: 'Email is taken'
//                 });
//             }

//             //  setting bound time in bound time databases
//              if(user.profileType == 1){
//             const newMnagerInboudDB = new boundTime({
//             _id : user._id,
//              morBoundTime: '06:00',
//              nigBoundTime: "06:00",
//              hostelName: user.hostelName,
//             guestMorMealCharge:user.guestMorMealCharge,
//             guestNigMealCharge: user.guestNigMealCharge,
//             grandCharge: user.grandCharge,
//             lock:true
//               })
//         newMnagerInboudDB.save();
//       }
//         user.salt = undefined;
//         user.hashed_password = undefined;

//             res.status(200).json({ user });
//         });
//     } catch (err) {
//         console.error(err.message);
//     }
// };

exports.signin = (req, res) => {
    // find the user based on email   
    const { email, password } = req.body;
    User.findOne({ email })
    .exec( (err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User with that email does not exist. Please signup'
          });
      }
      // if user is found make sure the email and password match
      // create authenticate method in user model
      if (!user.authenticate(password)) {
          return res.status(401).json({
              error: 'Email and password dont match'
          });
      }        
      // generate a signed token with user id and secret
      const token = jwt.sign({ _id: user._id , profileType : user.profileType, membership:user.membership }, process.env.JWT_SECRETE);
      // persist the token as 't' in cookie with expiry date
      res.cookie('t', token, { expire: new Date() + 9999 });
      // return response with user and token to frontend client
     
      return res.json({ token, user });
  });
};

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRETE,
    userProperty: 'auth'
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && (req.auth.profileType == 1||req.profile._id == req.auth._id);
    if (!user) {
        return res.status(403).json({
            error: 'Access denied'
        });
    }
    next();
};

exports.isManager = (req, res, next) => {
    if (req.profile.profileType != 1) {
        return res.status(403).json({
            error: 'Manager resourse! Access denied'
        });
    }
    next();
};

exports.isDev = (req, res, next) => {
    if (req.profile.profileType != 3) {
        return res.status(403).json({
            error: 'Devloper resourse! Access denied'
        });
    }
    next();
};

exports.getAllcode=(req, res)=>{
    Admin.findOne({}, (err, admin)=>{
      if(err) {
          console.log("err came " , err);
        return res.json({error:err})
      }else{
        return res.json({codes : admin.codes})
      }
    })
  }
  
exports.getAllHostedUnHostedHostel=(req, res)=>{
    var hostedHostels =[];   
    boundTime.find({}, (err, registerHostels)=>{
      if(err) {
          
        return res.json({error:err})
      }else{
        //save hosted hostels ....
        registerHostels.forEach(hostel => {
            let rec = {
                hostelName : hostel.hostelName
            }
            hostedHostels.push(rec);
         });
        return res.json({hostedHostels})
      }
    })
  }
 
exports.uploadPic =  (req, res) => {
  // requested userId can be found using  ...  req.profile._id
  const userId = req.profile._id; 

  // write code to set image data..`
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
      if (err) {
          return res.status(400).json({
              error: 'Image could not be uploaded'
          });
      }
    
     
    if(files.image == undefined){
      return res.json({error: "Please upload an image"})
    }

      // 1kb = 1000
      // 1mb = 1000000
    if (files.image) {

      // if image size is greater than 1mb then image can't be uploaded
          // console.log("FILES image: ", files.image);
          // if (files.image.size > 1000000) {
          //     return res.status(400).json({
          //         error: 'Image should be less than 1mb in size'
          //     });
          // }
          
      // compressing the image data
      sharp(files.image.path)
      .resize(200)
      .toBuffer()
      .then( data => {          

        User.findOneAndUpdate({_id : userId } , {$set:{
          "image.data" : data,
          "image.contentType": files.image.type
      }},(err , result)=>{
          if(err){
              console.log(err);
          }else {
              return res.status(300).json({
                  info: 'successfully saved'
                 });
          }
      });
      })
      .catch( err => { console.log("something went wrong") });
}
  });  
};

exports.resetPassword = (req,res,next) => {
    var email = req.body.emailid;   
    User.findOne({"email": email},function(err,foundUser){
      if(err){
        console.log(err);
      } else {

      if(!foundUser){
          console.log("user does not exist");
          return res.status(500).json({error:"User does not exist Please SignUp"});
        }

      const secret = JWT_SECRET + foundUser.password;
      const payload = {
        email: foundUser.email,
        id: foundUser._id
      }
      const token = jwt.sign(payload,secret,{expiresIn: "15m"});
      const link = `http://localhost:3000/user/forgotpassword/${foundUser._id}/${token}`;
      const CLIENT_ID = process.env.CLIENT_ID;
      const CLIENT_SECRET = process.env.CLIENT_SECRET;
      const REDIRECT_URI = process.env.REDIRECT_URI;
      const REFRESH_TOKEN= process.env.REFRESH_TOKEN;
      const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);     
      oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});  
      async function sendMail(){
        try {
          const accessToken = await oAuth2Client.getAccessToken();         
          const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: "kuhosteler@gmail.com",
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken
            }
          });
          const mailOptions = {
            from: "KuHosteler  <kuhosteler@gmail.com>",
            to: foundUser.email,
            subject: "RESET PASSWORD",
            text: `http://localhost:3000/user/forgotpassword/${foundUser._id}/${token}`  
          };
          const result = transport.sendMail(mailOptions);
          return result;
        } catch (e) {
      console.log(e.message);
        }
      }  
       sendMail()
       .then(result => console.log("email sent "))
       .catch(e => console.log(e.message));

       return res.status(300).json({info:"Code has been sent to you Please check your  Email"})
    }})}

    exports.verfyMail = (req, res) => {
        const mail = req.body.email;
        const otp = req.body.newOTP;
        console.log(mail,otp);
        //check if this email already exits...
        User.findOne({email: mail}, (err , user)=>{
            if(err){
                console.log(err)
                return res.json({error:err})
            }else if(user){
                console.log("Mail is already in use");
                return res.status(500).json({error:"This mail already in use, Please SignIn."})
            }else{
              
          const CLIENT_ID = process.env.CLIENT_ID;
          const CLIENT_SECRET = process.env.CLIENT_SECRET;
          const REDIRECT_URI = process.env.REDIRECT_URI;
          const REFRESH_TOKEN= process.env.REFRESH_TOKEN;           
      
          const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);         
          oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});      
          async function sendMail(){
            try {
              const accessToken = await oAuth2Client.getAccessToken();
              const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  type: "OAuth2",
                  user: "kuhosteler@gmail.com",
                  clientId: CLIENT_ID,
                  clientSecret: CLIENT_SECRET,
                  refreshToken: REFRESH_TOKEN,
                  accessToken: accessToken
                }
              });
              const mailOptions = {
                from: "KuHostel <kuhosteler@gmail.com>",
                to: mail,
                subject: "MAIL VERIFICATION",
                text: `Your OTP for mail verification is ${otp}`      
              };
              const result = transport.sendMail(mailOptions);
              return result;
            } catch (e) {
              console.log(e.message);
            }
          }      
           sendMail()
           .then(result => console.log("email sent "))
           .catch(e => console.log(e.message));

           return res.status(300).json({info:"Code has been sent to you Please check your  Email"})
            }
        });     
        
    
    };
    
    exports.updatepassword = (req, res) => {
        const userId = req.body.userId;
        const password = req.body.password;
        const token = req.body.token;
        // findOneAndUpdate pass word ...
         var newPassword ;
         User.findById(userId, (err, user)=>{
            if(err){
                console.log(err);
            }else {

              if(!user){
                console.log("user does not exist");
                return res.status(500).json({error:"User does not exist Please SignUp"});
              }

              const secret = JWT_SECRET + user.password;
              try {
                const payload = jwt.verify(token,secret);
                console.log("in the encryption ");
                newPassword = user.encryptPassword(password);
              
                User.findOneAndUpdate({_id : userId} , {$set :{ 
                    'hashed_password' : newPassword
                }}, (err ,result)=>{
                if(err){
                 console.log(err);
                    }else{

                console.log("successfully updated");
                
                // when user successfully saved its password return the with valide token 
                // generate a signed token with user id and secret
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRETE);
                // persist the token as 't' in cookie with expiry date
                res.cookie('t', token, { expire: new Date() + 9999 });
                // return response with user and token to frontend client     
                return res.json({ token, user });
                 
                }
         });
               
              } catch (e) {
              return res.status(300).json({error: e.message})
            
              }
               
            }
         })
  };
  
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
var path = require('path');
var createError = require('http-errors');
const {readJSON , pushMealRecords } = require("./global/globalfunctions")
const boundTime = require('./models/boundTime');


var app = express();

// db
mongoose
    .connect(process.env.MONG_URL, {
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected'));

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//middleware

app.use(expressValidator());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//user middleware


app.use('/auth', require('./routes/auth'))
app.use('/manager', require('./routes/user/manager'));
app.use('/student', require('./routes/user/student'));
// app.use('/staff', require('./routes/user/staff'));
// app.use('/developer', require('./routes/user/developer'));
// app.use('/annonymous',  require('./routes/annonymous'));
// app.use('/social',  require('./routes/social'));


// PUSHING DATA in Student activity list ..............
  // setInterval(()=>{
  //   const date = new Date();
  //   boundTime.find({}, (err, users)=>{
  //     if(err || !users) console.log(err);
  //     else {
  //       const currM = date.getMinutes();
  //       const currH = date.getHours();
  //
  //       users.forEach((user)=>{
  //         const morH = parseInt (user.morBoundTime.slice(0,2));
  //         const nigH = parseInt (user.nigBoundTime.slice(0,2));
  //         const morM = parseInt (user.morBoundTime.slice(3,5));
  //         const nigM = parseInt (user.nigBoundTime.slice(3,5));
  //
  //         if( ((currH == morH && currM == morM )|| (currH == nigH && currM == nigM) ) && user.lock){
  //            // when current time matched with Boundtime then call the pushMealRecords function
  //           pushMealRecords(user.hostelName , user.guestMorMealCharge, user.guestNigMealCharge, user.grandCharge);
  //
  //             boundTime.findById(user._id , (err, manager)=>{
  //               if(err || !manager) console.log("something went wrong");
  //               else {
  //                 manager.lock = false;
  //                 manager.save();
  //               }
  //             })
  //         }
  //         if( currM == (nigM+1)%60 || currM ==(morM+1)%60 ){
  //           boundTime.findById(user._id , (err, manager)=>{
  //             if(err || !manager) console.log("something went wrong");
  //             else {
  //             manager.lock = true;
  //             manager.save();
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // }, 1000);



// catch 404 and forward to error handler
app.use(function(req, res, next
) {
  next(createError(404));
});

// const fs = require('fs');
// fs.readFile('./dbs/boundTime.josn' , 'utf-8' , (err ,fileData) =>{
//   if(err)
//     console.log();
//   else{
//     const data = JSON.parse(fileData);
//     console.log(data);
//   }
// });



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

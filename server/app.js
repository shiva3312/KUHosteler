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

//user middleware


app.use('/auth', require('./routes/auth'))
// app.use('/manager', require('./routes/user/manager'));
// app.use('/student', require('./routes/user/student'));
// app.use('/staff', require('./routes/user/staff'));
// app.use('/developer', require('./routes/user/developer'));
// app.use('/annonymous',  require('./routes/annonymous'));
// app.use('/social',  require('./routes/social'));
//


// catch 404 and forward to error handler
app.use(function(req, res, next
) {
  next(createError(404));
});


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

const express = require('express');
const {check ,validationErrors } = require('express-validator');

exports.userSignupValidator = (req, res, next) => {
    console.log("runing here ....")
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number');

    req.check('fname', 'Name is required').notEmpty();
    req.check('lname', 'Name is required').notEmpty();
    req.check('dob', 'Date of Birth is Required').notEmpty();
    req.check('department', 'Department Name is required').notEmpty();
    req.check('hostelName', 'Hostel Name is required').notEmpty();
    req.check('selfPhNo', 'Mobile Number is required').notEmpty();


    req.check('address', 'Address is required').notEmpty();
    req.check('dob', 'Date of Birth is required').notEmpty();




    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
     next();
};

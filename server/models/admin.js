
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({

    mealChargeMode : Boolean,
    guestVarification : Boolean
    
});

module.exports = mongoose.model('admin', AdminSchema , 'admin');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  morBoundTime : String,
  nigBoundTime: String,
  hostelName:String,
  guestMorMealCharge:Number,
  guestNigMealCharge: Number,
  grandCharge: Number,
  lock: Boolean
});

module.exports = mongoose.model('boundTime', PostSchema);

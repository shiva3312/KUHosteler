const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid").v1;

const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    //Basic info
    fname: { type: String, require: [true, "First Name is required"] },
    lname: { type: String, require: [true, "Last Name is required"] },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    hashed_password: String,
    salt: String,
    hostelName: { type: String, default: null },
    hostelTag: { type: String, default: null }, //diff type of tag ( maintanance , mess-prefect... etc)
    roomNo: { type: Number, default: 0 },
    gender: { type: String, default: null },
    religion: { type: String, default: null },
    dob: { type: String, default: null },

    education: {
      university: { type: String, default: "University of kalyani" },
      session: String, // Ex 2018-22
      course: { type: String, default: null },
      subject: { type: String, default: null },
      department: { type: String, default: null },
      semester: { type: String, default: null },
    },
    //contact
    guardian: { type: String, default: null },
    gPhNo: { type: String, default: null },
    selfPhNo: String,
    address: { type: String, default: null },
    avatar: { type: String, default: null },
    image: {
      data: { type: Buffer, default: null },
      contentType: { type: String, default: null },
    },
    bio: { type: String, default: null },
    hostelId: { type: String, default: null },
    membership: { type: Number, default: 0 }, // notMember(0)| officalGuest(1) | member(2) | WasMember(3) | rejected Request(4)

    //other
    notification: { type: Number, default: 0 },
    salary: { type: Number, default: 0 },
    profileType: { type: Number, default: 0 }, // 0 student , 1 manager , 2 employee , 3 admin

    //Meal
    mealPreference: [
      {
        day: String,
        morning: [{ choice: String }],
        night: [{ choice: String }],
      },
    ],

    //each day activity of student
    activity: [
      {
        date: String,
        fine: [{ reason: String, charge: Number }],
        mess_status: String,
        morning_charge: Number,
        night_charge: Number,
        this_day_guest: [
          {
            guestId: String,
            name: String,
            morning_charge: Number,
            night_charge: Number,
          },
        ],
      },
    ],

    guestMorMealCharge: Number,
    guestNigMealCharge: Number,
    grandCharge: Number,
    //active Guest list
    active_guest_list: [
      {
        date: String,
        guestHolderId: { type: ObjectId, ref: "user" },
        mealStatus: Boolean, // activated(1) or Listed(0)
        mealTime: String, // moring & Night | night |mor | OFF
        name: String,
        morCharge: { type: Number, default: 0 },
        nigCharge: { type: Number, default: 0 },
      },
    ],

    //payment records
    paymentRecord: [
      {
        auditDate: String,
        auditAmount: { type: Number, default: 0 },
        totalFine: { type: Number, default: 0 },
        fineReason: String,
        paid: { type: Number, default: 0 },
      },
    ],

    //committee member
    committeeMember: [{ membeberId: ObjectId, tag: String }],

    //notice  / fest
    notice: [
      {
        title: String,
        text: String,
        description: String,
        date: { type: Date, default: Date.now },
      },
    ],

    //mess
    //use binary concept (00 to 11) right bit for forced off / left bit for student messStatus
    messStatus: { type: Number, default: 1 },

    //Records
    mealInfoList: [
      {
        auditedDate: String,
        perheadCharge: { type: Number, default: 0 },
        totalMeal: { type: Number, default: 0 },
        totalFine: { type: Number, default: 0 },
        mealCountList: {
          borderMor: { type: Number, default: 0 },
          borderNig: { type: Number, default: 0 },
          guestMor: { type: Number, default: 0 },
          guestNig: { type: Number, default: 0 },
          totalMor: { type: Number, default: 0 },
          totalNig: { type: Number, default: 0 },
        },
      },
    ],

    //charge

    newChargelist: [
      {
        tag: String, // tag => fine / fest ...etc
        Title: String,
        description: String,
        amount: { type: Number, default: 0 },
      },
    ],

    //helpdesk
    helpSection: [
      {
        tag: String, // provost / vc / stewrd .... etc
        name: String,
        description: String,
        about: String,
        conatct: {
          phNo: String,
          email: String,
        },
      },
    ],

    //default menu for mess
    other: [{ type: Array, default: [] }],

    //setting
    appMode: { type: Boolean, default: false }, // dark or light
    font: String,
  },
  { timestamps: true }
);

// virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);

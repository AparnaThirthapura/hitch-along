var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DriverSchema = new Schema({
  driverName: {
    type: String
  },
  driverEmail: {
    type: String
  },
  driverPhoneNo: {
    type: String
  },
  driverFrom:{
    type:String,
  },
  driverFromGeometry:{
    type:{
      type:String,
      default:"Point"
    },
    coordinates:{
      type: [Number],
      index:"2dsphere"
    }
  },
  driverTo:{
    type:String,
  },
  driverToGeometry:{
    type:{
      type:String,
      default:"Point"
    },
    coordinates:{
      type: [Number],
      index:"2dsphere"
    }
  }
});

var Driver = mongoose.model("Driver", DriverSchema);
module.exports = Driver;

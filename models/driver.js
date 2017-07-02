var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// const PointSchema = new Schema({
//   type:{
//     type:String,
//     default:"Point"
//   },
//   coordinates:{
//     type: [Number],
//     index:"2dsphere"
//   }
// });

var DriverSchema = new Schema({
  driverName:{
    type:Schema.Types.ObjectId,
    ref:"User"
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

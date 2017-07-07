var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RiderSchema = new Schema({
  riderId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  riderFrom:{
    type:String,
  },
  riderFromGeometry:{
    type:{
      type:String,
      default:"Point"
    },
    coordinates:{
      type: [Number],
      index:"2dsphere"
    }
  },
  riderTo:{
    type:String,
  },
  riderToGeometry:{
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

var Rider = mongoose.model("Rider", RiderSchema);
module.exports = Rider;

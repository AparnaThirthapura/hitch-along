var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const PointSchema = new Schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type: [Number],
    index:"2dsphere"
  }
});

var RiderSchema = new Schema({
  riderName:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  riderFrom:{
    type:String,
  },
  riderFromGeometry:PointSchema,
  riderTo:{
    type:String,
  },
  riderToGeometry:PointSchema
});

var Rider = mongoose.model("Rider", RiderSchema);
module.exports = Rider;

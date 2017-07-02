var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:
  {
    type:String
  },
  phoneNo:{
    type:String
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;

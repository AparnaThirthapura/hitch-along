var axios = require('axios');
var apiBaseUrl = "http://localhost:3000";

var helpers = {
  verifyUser: function(email, password){
    var payload = {
      "email":email,
      "password":password
    };
    return axios.post(apiBaseUrl+"/login", payload);
  },

  saveDriverInfo: function(email, driverFrom, driverTo){
    console.log("--Inside saveDriverInfo function--");
    var payload = {
      "email":email,
      "driverFrom":driverFrom,
      "driverTo":driverTo
    };
    console.log(payload);
    return axios.post(apiBaseUrl+"/driver", payload);
  }
}

module.exports = helpers;

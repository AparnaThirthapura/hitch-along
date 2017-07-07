var axios = require('axios');
var apiBaseUrl = "http://localhost:3000";

var helpers = {
  verifyUser: function(email, password){
    console.log("--Inside verifyUser function--");
    var payload = {
      "email":email,
      "password":password
    };

    return axios.post(apiBaseUrl+"/login", payload);
  },

  verifyAndSaveUser: function(name, email, password, phoneNo){
    console.log("--Inside verifyAndSaveUser function--");
    var payload = {
      "name":name,
      "email":email,
      "password":password,
      "phoneNo":phoneNo
    };

    return axios.post(apiBaseUrl+"/signup", payload);
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
  },

  saveRiderInfo: function(email, riderFrom, riderTo){
    console.log("--Inside saveDriverInfo function--");
    var payload = {
      "email":email,
      "riderFrom":riderFrom,
      "riderTo":riderTo
    };
    console.log(payload);
    return axios.post(apiBaseUrl+"/rider", payload);
  },

  sendText: function(phoneNo, riderEmail){
    console.log("--Inside sendText function--");
    var payload = {
      "phoneNo": phoneNo,
      "riderEmail": riderEmail
    };
    console.log(payload);
    return axios.post(apiBaseUrl+"/sendtext", payload)
  },

  logoutUser: function() {
    console.log("--Inside logout function--");
    return axios.get(apiBaseUrl+"/logout");
  }

}

module.exports = helpers;

var axios = require('axios');
// var apiBaseUrl = "https://localhost:3000";

var helpers = {
  verifyUser: function(email, password){
    console.log("--Inside verifyUser function--");
    var payload = {
      "email":email,
      "password":password
    };

    return axios.post("/login", payload);
  },

  verifyAndSaveUser: function(name, email, password, phoneNo){
    console.log("--Inside verifyAndSaveUser function--");
    var payload = {
      "name":name,
      "email":email,
      "password":password,
      "phoneNo":phoneNo
    };

    return axios.post("/signup", payload);
  },

  saveDriverInfo: function(email, driverFrom, driverTo){
    console.log("--Inside saveDriverInfo function--");
    var payload = {
      "email":email,
      "driverFrom":driverFrom,
      "driverTo":driverTo
    };
    console.log(payload);
    return axios.post("/driver", payload);
  },

  saveRiderInfo: function(email, riderFrom, riderTo){
    console.log("--Inside saveDriverInfo function--");
    var payload = {
      "email":email,
      "riderFrom":riderFrom,
      "riderTo":riderTo
    };
    console.log(payload);
    return axios.post("/rider", payload);
  },

  sendText: function(phoneNo, riderEmail){
    console.log("--Inside sendText function--");
    var payload = {
      "phoneNo": phoneNo,
      "riderEmail": riderEmail
    };
    console.log(payload);
    return axios.post("/sendtext", payload)
  },

  logoutUser: function() {
    console.log("--Inside logout function--");
    return axios.get("/logout");
  }

}

module.exports = helpers;

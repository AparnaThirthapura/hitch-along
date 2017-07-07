const User = require("../models/user");

module.exports = function(app, passport){
  app.get("/", function(res, req){
    res.send("Welcome to hitchAlong! app Root Page");
  });

  app.post("/login", passport.authenticate("local-login"), function(req, res){
    console.log("sending..." + req.body);
    res.send(req.body);
	});

  app.post("/signup", passport.authenticate("local-signup"), function(req, res){
    console.log("sending..." + req.body);
    console.log("Result: " + res);
    res.send(req.body);
  });

};

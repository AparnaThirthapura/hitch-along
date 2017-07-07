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

  // app.get("/homepage", isLoggedIn, function(req, res){
	// 	db.User.findAll({
	// 		where:{name:req.user.name}
	// 	}).then(function(dbUser){
	// 		res.send("Welcome to GoCarr. Are you Driving or Riding Today");
	// 	});
	// });

  app.get("/homepage", function(req, res){
    res.send("This will be the main page");
  });

  app.get("/logout", function(req, res) {
    res.redirect('/');
	});

  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated())
  //     return next();
  //   // res.redirect("/signin");
  //     res.send("Authentication Failed");
  // }
};

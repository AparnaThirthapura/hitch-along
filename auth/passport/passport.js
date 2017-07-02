var bCrypt = require("bcrypt-nodejs");

var User = require("../../models/user.js");

module.exports = function(passport){

  var LocalStrategy = require("passport-local").Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done){
      console.log("+++Inside the passport function+++");
      console.log(req.body);

      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        "email": email
      }).then(function(user) {
          if (user)
            {
                return done(null, false, {
                  message: 'That email is already taken'
                });
            } else
            {
                console.log("+++Creating a new user+++");

                var userPassword = generateHash(password);
                var data =
                {
                  name:req.body.name,
                  email: email,
                  password: userPassword,
                  phoneNo: req.body.phoneNo
                };

                console.log(data);

                User.create(data).then(function(newUser, created) {
                  if (!newUser) {
                    return done(null, false);
                  }
                  if (newUser) {
                    return done(null, newUser);
                  }
                });
            }
        });
    }
  ));

  passport.use('local-login', new LocalStrategy(
      {
          // by default, local strategy uses username and password, we will override with email
          usernameField: 'email',
          passwordField: 'password',
          passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) {
          console.log("Validating: " + email + " " + password);

          var isValidPassword = function(userpass, password) {
              return bCrypt.compareSync(password, userpass);
          };

          User.findOne({
            "email": email
          }).then(function(dbUser) {
              console.log("inside findOne DB function" + dbUser);
            //  console.log("email: " + dbUser.email);
            //  console.log("password: " + dbUser.password);

              if (!dbUser) {
                  return done(null, false, {
                      message: 'Email does not exist'
                  });
              }
              if (!isValidPassword(dbUser.password, password)) {
                  return done(null, false, {
                      message: 'Incorrect password.'
                  });
              }

              console.log("Authentication successful.");
              // var userinfo = dbUser.get();

              //use session here to store the user information
              //app.getSession to get
              return done(null, dbUser);
          }).catch(function(err) {
              console.log("Error while login:", err);
              return done(null, false, {
                  message: 'Something went wrong with your Signin'
              });
          });
      }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
  });
}

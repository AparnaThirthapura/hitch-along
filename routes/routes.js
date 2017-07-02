const Driver = require("../models/driver");
const Rider = require("../models/rider");

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBZeGnQib45X2ryo_CNyAWMG0d6cM8H4hs'
});
// const APIKEY = "AIzaSyBZeGnQib45X2ryo_CNyAWMG0d6cM8H4hs";

module.exports = function(app){

  var driverFromLat = 0.0;
  var driverFromLng = 0.0;
  var driverToLat = 0.0;
  var driverToLng = 0.0;

  var riderFromLng = 0.0;
  var riderFromLng = 0.0;
  var riderToLat = 0.0;
  var riderToLng = 0.0;

  app.post("/driver", function(req, res){
    console.log("=====Printing the req.body of Driver======");
    console.log(req.body);

      googleMapsClient.geocode({
        address: req.body.driverFrom
        }, function(err, response) {
          if (!err) {
            console.log("Driver From geometry");
            console.log(response.json.results[0].geometry.location);

              driverFromLat = response.json.results[0].geometry.location.lat,
              driverFromLng = response.json.results[0].geometry.location.lng
          }

          googleMapsClient.geocode({
            address: req.body.driverTo
            }, function(err, response) {
              if (!err) {
                console.log("Driver To Coordinates");
                console.log(response.json.results[0].geometry.location);

                driverToLat = response.json.results[0].geometry.location.lat,
                driverToLng = response.json.results[0].geometry.location.lng
              }

              var newDriver = new Driver({
                // driverName:req.body.name,
                driverFrom:req.body.driverFrom,
                driverFromGeometry: {
                  type:"Point",
                  coordinates:[driverFromLng, driverFromLat]
                },
                driverTo:req.body.driverTo,
                driverToGeometry: {
                  type:"Point",
                  coordinates:[driverToLng, driverToLat]
                }
              });
              console.log("===New Driver Details===");
              console.log(newDriver);

              newDriver.save(function(err, doc){
                if(err)
                  console.log("Error: " + err);
                else {
                  res.send("Saved the driver");
                }
              });
          });
      });
  });

  app.post("/rider", function(req, res){
    console.log("=====Printing the req.body of Rider======");
    console.log(req.body);

      googleMapsClient.geocode({
        address: req.body.riderFrom
        }, function(err, response) {
          if (!err) {
            console.log("Rider From Coordinates");
            console.log(response.json.results[0].geometry.location);

              riderFromLat = response.json.results[0].geometry.location.lat,
              riderFromLng = response.json.results[0].geometry.location.lng
          }

          googleMapsClient.geocode({
            address: req.body.riderTo
            }, function(err, response) {
              if (!err) {
                console.log("Driver To geometry");
                console.log(response.json.results[0].geometry.location);

                riderToLat = response.json.results[0].geometry.location.lat,
                riderToLng = response.json.results[0].geometry.location.lng
              }

              var newRider = new Rider({
                riderFrom:req.body.riderFrom,
                riderFromGeometry: {
                  type:"Point",
                  coordinates:[riderFromLng, riderFromLat]
                },
                riderTo:req.body.riderTo,
                riderToGeometry: {
                  type:"Point",
                  coordinates:[riderToLng, riderToLat]
                }
              });
              console.log("===New rider Details===");
              console.log(newRider);

              newRider.save(function(err, doc){
                if(err)
                  console.log("Error: " + err);
                else {

                  Driver.find({driverFromGeometry: { $near: {$geometry: { type: "Point",  coordinates: [ riderFromLng, riderFromLat ] }, $minDistance: 0,$maxDistance: 1000}}}, function(err,doc){
                    if(err){
                      console.log("Cannot locate drivers");
                    }
                    else{
                      console.log(doc);
                      res.send(doc);
                    }
                  });
                  // res.send("Saved the rider");
                }
              });
          });
      });
  });
};

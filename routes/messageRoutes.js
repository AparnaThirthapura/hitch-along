var accountSid = 'ACfcc8d0037e727ac4a322b5c834a4448b';
var authToken = '8b406e887d834283102f1be38f12ce8d';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

module.exports = function(app){

  app.post("/sendtext", function(req, res){

    var ph = '+1' + req.body.phoneNo;
    var riderEmail = req.body.riderEmail;
    console.log("Sending to: " + ph);

    var payload = {
        body: 'Hello!' + riderEmail + ' would like to ride with you',
        to: ph,
        from: '+16093750304'
    };

    client.messages.create(payload)
    .then((message) => {
        console.log(message.sid);
        res.send(message.sid);
      }
    );
  });
  
}

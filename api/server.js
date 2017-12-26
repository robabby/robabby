const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
const nodemailer = require('nodemailer');
const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};

const GMAIL_PASS = 'kbdbqbegyfnjpadt';

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 3000;

// set the static files location
app.use(express.static(__dirname + '/client/public'));

// require('./routes')(app);

const buildMessage = (obj, isHTML) => {
  let newLine = isHTML ? '<br />' : '\n';
  let message = [];

  for (var key in obj) {
   if (obj.hasOwnProperty(key)) {
     message += key + ': ' + obj[key] + newLine;
   }
 }

  console.log(message);

  return message;
}

app.post('/api/contact', function(req, res, next) {

  const { body } = req;

  // console.log('post:api/contact:req.body', req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'robabby23@gmail.com', // generated ethereal user
          pass: GMAIL_PASS  // generated ethereal password
      }
  });

  // Message object
  let message = {
    from: 'Contact Form <contact@robabby.com>',
    to: 'Rob Abby <hello@robabby.com>',
    subject: 'Contact Form',
    text: buildMessage(body, false),
    html: buildMessage(body, true)
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
        return process.exit(1);
    }

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.sendStatus(200);
  });

  // Generate SMTP service account from https://ethereal.email/
});

// startup our app at http://localhost:3000
app.listen(port);


// expose app
exports = module.exports = app;

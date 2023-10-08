var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dravid2010752@ssn.edu.in',
    pass: '@20j60v2L5I8I'
  }
});

var mailOptions = {
  from: 'dravid2010752@ssn.edu.in',
  to: 'dravidaravindkumar@gmail.com',
  subject: 'Sending mail using node js',
  text: `Hii! this is to notify your vaccination date`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
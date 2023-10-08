const mongoose = require('mongoose')
var nodemailer = require('nodemailer');
const email = async() => {

    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0/test");
    var nameSchema = new mongoose.Schema({
        username1:String,
        mail_id:String,
        phone_number:String,
        password:String,
        age:Number,
        dob:String,
        gender:String
    
    });
      
    var users = mongoose.model("users", nameSchema);
    const list = await users.find()
    console.log("list : ",list)
    for(let i = 0; i < list.length; i++)
    {
        var dob = new Date(list[i].dob)
        // Compare today's date with the future date
        console.log(dob)
        var day1 = dob.getDate();
        var month1 = dob.getMonth() + 2;
        var year1 = dob.getFullYear();
      
        var currentDate = new Date();
        var day2 = currentDate.getDate();
        var month2 = currentDate.getMonth();
        var year2 = currentDate.getFullYear();

        // var vaccineDate = new Date(dob.getFullYear(), dob.getMonth() + 2, dob.getDate());
        if (year1 === year2 && month1 === month2 && day1 === day2) {
          console.log('SUCCESS', list[i])
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'dravid2010752@ssn.edu.in',
              pass: '@20j60v2L5I8I'
            }
          });
          
          var mailOptions = {
            from: 'dravid2010752@ssn.edu.in',
            to: list[i].mail_id,
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

          
        } else if (year1 < year2 || (year1 === year2 && month1 < month2) || (year1 === year2 && month1 === month2 && day1 < day2)) {
          console.log("Date is earlier")
        } else {
          console.log("Date is later")
        }
      }

    
    }  

email()

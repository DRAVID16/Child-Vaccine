const express = require('express')
const mongoose = require('mongoose')

const login = async(req, res) => {
    
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


    const { mail_id, password } = req.body;
    console.log("hello",req.body)
        // try {
      const user = await users.findOne({ mail_id:req.body.e });
      console.log(user);
    //   if (!user) {
    //     // User not found
    //     return res.status(401).send('Invalid username');
    //   }
    //   if (password!=user.password) {
    //     // Invalid password
    //     return res.status(401).send('Invalid username or password');
    //   }
  
      // Login successful
      console.log('Login Successful')
      console.log(user)
    //   res.send('Login successful!');
      res.status(400).json(user)

    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send('Internal Server Error');
    // }
}

const signup = (req, res) => {
    
}


const email = async(req, res) => {

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
  var currentDate = new Date();

  // Add 2 months to the current date
  var futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate());
  
  // Compare today's date with the future date
  if (currentDate.getTime() > futureDate.getTime()) {
    console.log("Today's date is later than two months later.");
  } else if (currentDate.getTime() < futureDate.getTime()) {
    console.log("Today's date is earlier than two months later.");
  } else {
    console.log("Today's date is the same as two months later.");
  }
}
 

module.exports = {
    login, 
    signup
}
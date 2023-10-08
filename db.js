const mongoose = require('mongoose');
const User= require("./sch.js")

const connectDB = async() =>{
console.log("hi");
    try{
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0")
          console.log("Mongdb conneccted");
          
        }
        catch(error){
            console.log(error);
            process.exit(1);
        }
    const user= await User.create({
      username1:"hi",
      mail_id:"f",
      password:"2",
      age:"3",
      gender:"m",
      phone_number:"234",
    })

    if(user){console.log("done");}

}

connectDB();

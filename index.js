var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

var mongoose = require("mongoose");
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

app.get("/signup", (req, res) => {
    res.sendFile("C:/Users/Dravid Aravind Kumar/OneDrive/Desktop/CHILD_VACCINE/signup.html");
});

app.post("/signup", (req, res) => {
    var myData = new users(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


app.post("/login", async (req, res) => {
    const { mail_id, password } = req.body;
  
    try {
      const user = await users.findOne({ mail_id:req.body.mail_id });
      console.log(user);
      if (!user) {
        // User not found
        return res.status(401).send('Invalid username');
      }
      if (password!=user.password) {
        // Invalid password
        return res.status(401).send('Invalid username or password');
      }
  
      // Login successful
      console.log('Login Successful')
      console.log(user)
      res.send('Login successful!');
      res.status(400).json(user)

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
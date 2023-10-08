const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const connectDB = async() => {
//     console.log("function")
//     const connected = await mongoose.connect(connectionString)
//     console.log(connected)
// }
// connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.use('/users', require('./routes'))

app.listen(3000, (req, res) => {
    console.log("Server running on port 3000")
})

// const connectionString = 'mongodb://127.0.0.1:27017/vaccine';
// const connectionString = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0'
// mongoose.connect (connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//     console.log ('Connected to MongoDB');
// })
// .catch ((err) => {
//     console.log ('Error connecting to MongoDB', err);
// });

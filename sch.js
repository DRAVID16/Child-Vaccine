const mongoose = require('mongoose')

const usersch = mongoose.Schema(
   {
    username1:{
        type: String,
    },
    mail_id:{
        type: String,
    },
    password:{
        type: String,
    },
    age:{
        type: Number,
    },
    gender:{
        type: String,
    },
    phone_number:{
        type: String,
    },
   },
   {
    timestamps:true,
   }
)

module.exports = mongoose.model('User',usersch)
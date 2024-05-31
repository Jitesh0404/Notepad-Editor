const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please provide your full name"],
        trim:true
    },
    userName:{
        type:String,
        required:[true,"Please provide your username"],
        trim:true,
        unique:[true,"Username already exists"]
    },
    password:{
        type:String,
        required:[true,"Please provide your password"],
    },
    profileImg:{
        type:String,
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;
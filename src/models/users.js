const mongoose = require("mongoose");
const validator= require("validator");

//defining schema
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})

const User= new mongoose.model("User", userSchema); 

module.exports = User;
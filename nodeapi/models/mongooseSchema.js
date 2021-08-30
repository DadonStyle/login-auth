const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: "Title is required",
        minlength: 4,
        maxlength: 150 
    },
    password:{
        type:String,
        required: "Body is required",
        minlength: 4,
        maxlength: 2000 
    }
})

module.exports = mongoose.model("User",userSchema, "users")
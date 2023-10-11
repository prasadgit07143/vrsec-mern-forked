const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:String,
})

const userModel = mongoose.model("users",userSchema);

console.log(userModel)
module.exports = userModel
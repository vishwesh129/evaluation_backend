const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email : {type : String , required : true},
    password : {type : String , required : true},
    IP_iddress : {type : String , required : true},
})
const Usermodel = mongoose.model("user" , userSchema);


module.exports = {Usermodel}
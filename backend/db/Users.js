let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    name:{type:String,required:true},
    id:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    Idcard:{type:String,required:true},
    borrowed:{type:String}
})

module.exports = mongoose.model('User',userSchema)
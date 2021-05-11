let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ManageSchema = new Schema({
    userName:{type:String,required:true},
    id:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
})

module.exports = mongoose.model('Manager',ManageSchema)
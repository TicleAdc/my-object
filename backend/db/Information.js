let mongoose = require('mongoose')
let Schema = mongoose.Schema

let informationSchema = new Schema({
    bookName:{type:String,required:true},
    userName:{type:String,required:true},
    lendTime:{type:String,required:true},
    borrowTime:{type:String,required:true},
    others:{type:String}
})

module.exports = mongoose.model('information',informationSchema)
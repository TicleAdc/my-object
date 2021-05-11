let mongoose = require('mongoose')
let Schema = mongoose.Schema

let booksSchema = new Schema({
    bookName:{type:String,required:true},
    writer:{type:String,required:true},
    ISBN:{type:String,required:true},
    count:{type:String,required:true},
    type:{type:String,required:true},
    description:{type:String}
})

module.exports = mongoose.model('books',booksSchema)
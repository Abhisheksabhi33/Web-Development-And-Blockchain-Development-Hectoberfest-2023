const mongoose = require('mongoose')


const schema=mongoose.Schema({
    email:String,
    qid:String,
    note:String
})

module.exports = mongoose.model('notes',schema)
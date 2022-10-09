const mongoose = require('mongoose')

const schema= mongoose.Schema({
    name:String,
    url:String,
    cat:String,
    qid:String,

}) 

module.exports = mongoose.model('questions',schema)
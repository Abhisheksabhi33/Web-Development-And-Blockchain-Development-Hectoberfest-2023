const mongoose = require('mongoose')

const schema = mongoose.Schema({
    qid:String,
    email:String
})

module.exports = mongoose.model('completedquestions',schema)
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,  
        unique:true,
    },
    password:{
        type:String,
    }
})

module.exports = mongoose.model('users',schema)
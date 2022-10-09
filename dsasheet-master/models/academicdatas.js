let mongoose = require('mongoose') 


let schema = mongoose.Schema({
    email:{
        type:String,
        unique:true 
    },
    college:String,
    company:String,
    country:String,
    phone:String,
    portfolio:String,
    publicAccount:false,
    
})

module.exports = mongoose.model('academicdatas',schema)
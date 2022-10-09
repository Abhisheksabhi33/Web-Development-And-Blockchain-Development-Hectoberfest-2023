const Users = require('../models/users')
const AcademicData = require('../models/academicdatas')

module.exports.about = (req,res) => {
    res.render('about',{pageTitle:'About us'})
}

module.exports.userProfileData = async (req,res) =>{

    try{
        let {uid} = req.query
        let user = await Users.findById(uid)
        if(!user)
        {   console.log(user)
            return res.render('userProfileData',{error:true})
        }
        let userName = user.name
        let academicdatas = await AcademicData.findOne({email:user.email})
       
        if(!academicdatas)
        {   console.log(academicdatas)
            return res.render('userProfileData',{success:true,publicAccount:false,userName})
        }
        if(academicdatas.publicAccount==false)
        {
            return res.render('userProfileData',{success:true,publicAccount:false,userName})
        }
        let company = academicdatas.company 
        let email = academicdatas.email  
        let college = academicdatas.college 
        let country = academicdatas.country    
        let phone = academicdatas.phone 
        let portfolio = academicdatas.portfolio 

        return res.render('userProfileData',{success:true,userName,email,company,college,country,phone,portfolio})  
    }
    catch(e){
        return res.render('userProfileData',{error:true})
    }
}   
const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')
const User = require('../models/users')

const maxAge=1000*60*60*24*5 // 5days
const createToken = (id)=>{
    return jwt.sign({id},'srudra754',{expiresIn:maxAge})
}

module.exports.login_get=(req,res)=>{

    if(res.locals.isAuthenticated)
    return res.redirect('/')

    res.locals.pageTitle="Login"
    res.render('login')
}


module.exports.signup_get=(req,res)=>{
    

    if(res.locals.isAuthenticated)
    return res.redirect('/')

    res.locals.pageTitle="Signup"
    res.render('signup')
}


module.exports.login_post= async (req,res)=>{
     let {email,password} = req.body

     if(email=="" || password=="")
        return res.json({error:"Input fields can not be empty!"})

    try{
        let user=await User.findOne({email})
        
        if(!user)
            return res.json({error:"This email is not registered!"})

          
        if(user.password != password)
            return res.json({error:"Incorrect password!"})
        
        res.cookie('jwt',createToken(user._id),{httpOnly:true,maxAge:maxAge})
        res.json({success:email+" , "+password})
    }
    catch(e){

        return res.json({error:e.message})

    }
}


module.exports.signup_post=async(req,res)=>{
    let {name,email,password} = req.body

    if(email=="" || password=="" || name=="")
    return res.json({error:"Input fields can not be empty!"})

    if(password.length<=6)
        return res.json({error:"Password lenght must be greater six chars!"})

    const tempUserFetch = await User.findOne({email}) 

    if( tempUserFetch)     
        return res.json({error:"This email is already registered!"})

    try{
        let user=await User.create({name,email,password}) 
        res.cookie('jwt',createToken(user._id),{httpOnly:true,maxAge:maxAge})
        res.json({success:name+" , "+email+" , "+password})
    }
    catch(e){

        return res.json({error:e.message})

    }
}

module.exports.logout=(req,res)=>{
    
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/')
}


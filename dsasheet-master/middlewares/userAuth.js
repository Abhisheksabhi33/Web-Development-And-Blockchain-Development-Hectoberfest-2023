const jwt=require('jsonwebtoken')
const User = require('../models/users')

module.exports.checkUser = (req,res,next) =>{
    
    res.locals.pageTitle="Focussed" // default page title
    let token = req.cookies.jwt 
    if(token)
    {
        jwt.verify(token,'srudra754', async(err,decodedToken)=>{

            if(err)
            {
                res.locals.user=null
                next()
            }
            else 
            {
                const user= await User.findById(decodedToken.id) 
                res.locals.user=user.email 
                res.locals.isAuthenticated=true 
                next()
            } 
        })
    }
    else 
    {
        res.locals.user=null
        next()
    }
}

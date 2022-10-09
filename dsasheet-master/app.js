const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
 

const {checkUser} = require('./middlewares/userAuth')
const router = require('./routes/authRoutes')
const contentRouter = require('./routes/striverSheetContentRoutes')
const generalRouter = require('./routes/generalRoutes') 
const osRoutes = require('./routes/osRoutes')
const graphRoutes = require('./routes/graphRoutes')



const DB = 'mongodb://localhost:27017/dsasheets'
mongoose.connect(DB,()=>{
    console.log('connected to db')
}) 
   
const app = express() 
  
app.set('view engine','ejs')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static(__dirname+"/public"))

app.use(checkUser)
app.use(router) 
app.use(generalRouter)
app.use(contentRouter)
app.use(osRoutes)
app.use(graphRoutes)

app.get('/',(req,res)=>{

    // if(!res.locals.isAuthenticated)
    // return res.send('please authorize yourself!')
    res.locals.pageTitle="All tracks"
    res.render('home')
})

app.get('*',(req,res)=>{
    res.render('404')
})

const port = process.env.PORT || 3000
app.listen(port,()=>{ 
    console.log("listening to port "+port)
})

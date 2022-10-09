const quests= require('../models/questions')
const Notes = require('../models/notes')
const CompletedQuestions = require('../models/completedquestions')
const LikedQuestions = require('../models/likedquestions')
const Users = require('../models/users')
const AcademicData = require('../models/academicdatas')
const users = require('../models/users')
const validator = require('validator')

async function setDefaultPortfolio()
{
    let allu = await AcademicData.updateMany(
        {},
        { $set: {"publicAccount": true} },
    )

}
// setDefaultPortfolio() 
 
module.exports.striverSheet = async(req,res) =>{
    const q = await quests.find({})
    
    res.locals.pageTitle="Striver Sheet"
    let hashMap={}
    for(let i=0;i<q.length;++i)
        hashMap[q[i].qid]=q[i].cat


    let trieDone=0,graphDone=0,bstDone=0,btDone=0,stringDone=0,sqDone=0,heapDone=0,bsDone=0,recBackDone=0,recDone=0,greedyDone=0,arrLLDone=0,LLDone=0,arrDone=0,dpDone=0 

    let questionsDoneInEachCategory=[arrDone,LLDone,arrLLDone,greedyDone,recDone,recBackDone,bsDone,sqDone,heapDone,btDone,bstDone,graphDone,dpDone,trieDone,stringDone]
    let numberOfQuestionsDoneInEachCategory=[...questionsDoneInEachCategory]

    if(!res.locals.isAuthenticated)
    return res.render('striverSheet',{que:q,doneArr:[],likedQuestionsArr:[],questionsDoneInEachCategory,totalCompletedQuestions:0,percentageOfQuestionsDone:0,numberOfQuestionsDoneInEachCategory})

    let fetchedCompletedQuestions = await CompletedQuestions.find({email:res.locals.user})
    let totalCompletedQuestions = fetchedCompletedQuestions.length
    let doneArr=[]
    for(let i=0;i<fetchedCompletedQuestions.length;++i)
    {
        doneArr.push(fetchedCompletedQuestions[i].qid)
        // let questionCategory= (await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat

        let questionCategory = hashMap[fetchedCompletedQuestions[i].qid]

        if(questionCategory=='array')
            ++arrDone 
        else if(questionCategory=='linkedList')
            ++LLDone 
        else if(questionCategory=='linkedListAndArrays')
            ++arrLLDone 
        else if(questionCategory=='greedy')
            ++greedyDone 
        else if(questionCategory=='recursion')
            ++recDone 
        else if(questionCategory=='recursionAndBacktracking')
            ++recBackDone 
        else if(questionCategory=='binarySearch')
            ++bsDone
        
        else if(questionCategory=='heap')
            ++heapDone 
        else if(questionCategory=='stackAndQueue')
            ++sqDone 
        else if(questionCategory=='binaryTree')
            ++btDone 
        else if(questionCategory=='binarySearchTree')
            ++bstDone 
        else if(questionCategory=='graph')
            ++graphDone
        else if(questionCategory=='dp')
            ++dpDone
        else if( questionCategory=='trie')
            ++trieDone
        else if( questionCategory=='string')
        ++stringDone


        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='array')
        //     ++arrDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='linkedList')
        //     ++LLDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='linkedListAndArrays')
        //     ++arrLLDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='greedy')
        //     ++greedyDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='recursion')
        //     ++recDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='recursionAndBacktracking')
        //     ++recBackDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='binarySearch')
        //     ++bsDone
        
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='heap')
        //     ++heapDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='stackAndQueue')
        //     ++sqDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='binaryTree')
        //     ++btDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='binarySearchTree')
        //     ++bstDone 
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='graph')
        //     ++graphDone
        // if((await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='dp')
        //     ++dpDone
        // if( (await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='trie')
        //     ++trieDone
        // if( (await quests.findOne({qid:fetchedCompletedQuestions[i].qid})).cat=='string')
        //  ++stringDone
            
    }
    
    let fetchedLikedQuestions = await LikedQuestions.find({email:res.locals.user})
    let likedQuestionsArr=[]
    for(let i=0;i<fetchedLikedQuestions.length;++i)
    likedQuestionsArr.push(fetchedLikedQuestions[i].qid)
    //trie-7, dp-15, graph-11, bst-22, bt-27, string-12, sq-17, heap-6, bs-8, rec&back-6, rec-6, greedy-6, a&l-6, ll-12,arr-24   

    questionsDoneInEachCategory=[100*arrDone/24,100*LLDone/12,100*arrLLDone/6,100*greedyDone/6,100*recDone/6,100*recBackDone/6,100*bsDone/8,100*sqDone/17,100*heapDone/6,100*btDone/27,100*bstDone/22,100*graphDone/11,100*dpDone/15,100*trieDone/7,100*stringDone/12]
    numberOfQuestionsDoneInEachCategory=[arrDone,LLDone,arrLLDone,greedyDone,recDone,recBackDone,bsDone,sqDone,heapDone,btDone,bstDone,graphDone,dpDone,trieDone,stringDone]
   
    for(let i=0;i<questionsDoneInEachCategory.length;++i)
        questionsDoneInEachCategory[i]=questionsDoneInEachCategory[i].toFixed(0)
    res.render('striverSheet',{que:q,doneArr,likedQuestionsArr,questionsDoneInEachCategory,totalCompletedQuestions,percentageOfQuestionsDone:(100*totalCompletedQuestions/185).toFixed(0),numberOfQuestionsDoneInEachCategory})
}

module.exports.checkQuestion = async (req,res) => {

    if(!res.locals.isAuthenticated)
    {   
        return res.json({error:"Please login to save your progress."})
    }
    const {qid,done}=req.body

    let fetchedCompletedQuestions = await CompletedQuestions.find({email:res.locals.user})

    let doneArr=[]
    for(let i=0;i<fetchedCompletedQuestions.length;++i)
    doneArr.push(fetchedCompletedQuestions[i].qid)

    if(doneArr.includes(qid) && done==false)
        await CompletedQuestions.deleteOne({qid:qid,email:res.locals.user})
    

    else if(done==true && !doneArr.includes(qid))
        await CompletedQuestions.create({qid:qid,email:res.locals.user})


    return res.json({qid,done})
} 

module.exports.getNotes = async (req,res)=>{
    const {qid} = req.body
    
    let fetchedNote = await Notes.findOne({email:res.locals.user,qid:qid})
    if(fetchedNote)
    fetchedNote=fetchedNote.note
    return res.json({notes:fetchedNote})
}

module.exports.saveNote = async (req,res)=>{

    if(!res.locals.user)
    return res.json({error:"Please login!"})
    let {qid,noteToBeSaved}=req.body 

    let fetchedNote=await Notes.findOneAndUpdate(
        {
            qid:qid,
            email:res.locals.user
        },
        {
            "$set":{note:noteToBeSaved}
        }
    )

    if(!fetchedNote){
        await Notes.create({qid:qid,email:res.locals.user,note:noteToBeSaved})
    }
    res.json({qid,noteToBeSaved:fetchedNote})
}

module.exports.likeQuestion = async (req,res)=>{
    
    const {qid,status} = req.body
    
    if(!res.locals.isAuthenticated)
    {   
        return res.json({error:"Please login to save your progress."})
    }
  

    let fetchedLikedQuestions = await LikedQuestions.find({email:res.locals.user})

    let likedQuestionsArr=[]
    for(let i=0;i<fetchedLikedQuestions.length;++i)
    likedQuestionsArr.push(fetchedLikedQuestions[i].qid)

    if(likedQuestionsArr.includes(qid) && status=='notLiked')
        await LikedQuestions.deleteOne({qid:qid,email:res.locals.user})
    

    else if(status=='liked' && !likedQuestionsArr.includes(qid))
        await LikedQuestions.create({qid:qid,email:res.locals.user})

    let message 
    if(status=='liked')
        message="Yeah! you liked this question"
    else 
        message=false
    res.json({message})
}

module.exports.likedQuestionsEndPoint = async (req,res) =>{

    if(!res.locals.isAuthenticated)
    {   
        return res.redirect('/login')
    }

    res.locals.pageTitle="My liked questions"

    let currUser = res.locals.user 
    let allLikedQuestionsByThisUser = await LikedQuestions.find({email:currUser})
    let allQuestions = await quests.find({})
    let questsMap={} 
    for(let i=0;i<allQuestions.length;++i)
        questsMap[allQuestions[i].qid]=allQuestions[i]
    let allLikedQuestionsNames=[]
    
    for(let i=0;i<allLikedQuestionsByThisUser.length;++i)
           allLikedQuestionsNames.push(questsMap[allLikedQuestionsByThisUser[i].qid])
        // allLikedQuestionsNames.push( await quests.findOne({qid:allLikedQuestionsByThisUser[i].qid}) )
    res.render('likedQuestions',{allLikedQuestions:allLikedQuestionsNames})
  
}

function myComp(a,b)
{
    return b.questionsDoneByThisUser-a.questionsDoneByThisUser
}

module.exports.leaderboard = async (req,res) =>{
    let allUsers = await Users.find({})

    let allAcademicData = await AcademicData.find({}) 
    let academicDataMap={}
    for(let i=0;i<allAcademicData.length;++i)
    academicDataMap[allAcademicData[i].email]=allAcademicData[i] 


    let allCompletedQuestions = await CompletedQuestions.find({}) 
    let completedQuestionsMap={}
    for(let i=0;i<allCompletedQuestions.length;++i)
    completedQuestionsMap[allCompletedQuestions[i].email]=0;

    for(let i=0;i<allCompletedQuestions.length;++i)
    {
        completedQuestionsMap[allCompletedQuestions[i].email]+=1
    }
    let usersAndNumberOfQuestionsTheySolved = []
    
    res.locals.pageTitle="Leaderboard"

    for(let i=0;i<allUsers.length;++i)
    { 
        let userName = allUsers[i].name // correction by devIn
        let userId = allUsers[i]._id

        // let questionsDoneByThisUser = (await CompletedQuestions.find({email:allUsers[i].email})).length 
        let questionsDoneByThisUser = completedQuestionsMap[allUsers[i].email]
        // console.log(questionsDoneByThisUser)
        if(questionsDoneByThisUser<=10 || !questionsDoneByThisUser)continue;

        if(!questionsDoneByThisUser)questionsDoneByThisUser=0
        // console.log(questionsDoneByThisUser)
        // let college = await AcademicData.findOne({email:allUsers[i].email})
        let college = academicDataMap[allUsers[i].email]
        if(!college)
            college="NA"
        else
            college=college.college
        usersAndNumberOfQuestionsTheySolved.push({userId,userName,questionsDoneByThisUser,percentageDone: (100*questionsDoneByThisUser/185).toFixed(0),college})
    }

    usersAndNumberOfQuestionsTheySolved=usersAndNumberOfQuestionsTheySolved.sort(myComp)
    res.render('leaderboard',{usersAndNumberOfQuestionsTheySolved})
}

module.exports.userAccount  = async (req,res) =>{
    
    if(!res.locals.isAuthenticated)
    {   
        return res.redirect('/login')
    }

    res.locals.pageTitle="Account- "+res.locals.user
    let currUser = await users.findOne({email:res.locals.user})
    let name=currUser.name 
    let email=currUser.email 
    let password=currUser.password 

    let college="NA"
    let country="NA"
    let company="NA"
    let phone="NA"
    let portfolio="NA"
    let publicAccount=false

    let currAcademicData = await AcademicData.findOne({email:email}) 

    if(currAcademicData){
         college=currAcademicData.college 
         country=currAcademicData.country 
         company=currAcademicData.company 
         phone=currAcademicData.phone 
         portfolio=currAcademicData.portfolio
         publicAccount=currAcademicData.publicAccount
    }
    res.render('account',{name,email,password,college,country,company,phone,portfolio,publicAccount})
}

module.exports.saveAcademicData = async (req,res)=>{

    if(!res.locals.isAuthenticated)
    {   
        return res.json({error:"Please login to save your progress."})
    }

    try{

        let {country,company,college,phone,portfolio,publicAccount}=req.body

        if(!validator.isURL(portfolio))
        {
            return res.json({error:'Invalid portfolio url!'})
        }


        let currAcademicData=await AcademicData.findOne({email:res.locals.user})
        if(!currAcademicData)
        {
            await AcademicData.create({email:res.locals.user,country,company,college,phone,portfolio,publicAccount})
        }
        else
        {        
            await AcademicData.findOneAndUpdate(
                {
                    email:res.locals.user
                },
                {
                    "$set":{country,company,college,phone,portfolio,publicAccount}
                }
            )

        }
        return res.json({success:"Data updated successfully."})
    }
    catch(e){
        return res.json({error:"Something went wrong."})
    }


}
const contentControllers = require('../controllers/striverSheetContentControllers')
const {Router}  = require('express')

const contentRouter = Router() 

contentRouter.get('/striverSheet',contentControllers.striverSheet)
contentRouter.post('/checkQuestion',contentControllers.checkQuestion)
contentRouter.post('/getNotes',contentControllers.getNotes)
contentRouter.post('/saveNote',contentControllers.saveNote)
contentRouter.post('/likeQuestion',contentControllers.likeQuestion)
contentRouter.get('/likedQuestions',contentControllers.likedQuestionsEndPoint)
contentRouter.get('/leaderboard',contentControllers.leaderboard)
contentRouter.get('/account',contentControllers.userAccount)
contentRouter.post('/saveAcademicData',contentControllers.saveAcademicData)

module.exports = contentRouter
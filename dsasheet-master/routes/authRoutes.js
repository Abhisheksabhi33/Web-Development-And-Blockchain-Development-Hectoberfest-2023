const authControllers = require('../controllers/authControllers')
const {Router}=require('express')

const router = Router()

router.get('/login',authControllers.login_get)
router.get('/signup',authControllers.signup_get)
router.post('/login',authControllers.login_post)
router.post('/signup',authControllers.signup_post)
router.get('/logout',authControllers.logout)

module.exports = router 
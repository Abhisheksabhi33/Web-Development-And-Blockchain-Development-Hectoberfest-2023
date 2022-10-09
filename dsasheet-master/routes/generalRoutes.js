const {Router} = require('express')
const generalEndpoints = require('../controllers/generalEndpoints')

const router = Router()

router.get('/about',generalEndpoints.about)
router.get('/user',generalEndpoints.userProfileData)

module.exports = router
const {Router} = require('express')
const osController = require('../controllers/osController')


const router = Router()

router.get('/os',osController.osHome)
router.get('/os/ch1',osController.ch1)
// router.get('/os/ch2',osController.ch2)
router.get('/os/ch3',osController.ch3)
router.get('/os/ch4',osController.ch4)
router.get('/os/ch5',osController.ch5)
router.get('/os/ch6',osController.ch6)
router.get('/os/*',osController.comingSoon)


module.exports = router
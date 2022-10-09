const {Router} = require('express')
const graphController = require('../controllers/graphController')

const router = Router()

router.get('/graph',graphController.home)
router.get('/graph/ch1',graphController.ch1)
router.get('/graph/ch2',graphController.ch2)
router.get('/graph/ch3',graphController.ch3)
router.get('/graph/ch4',graphController.ch4)
router.get('/graph/ch5',graphController.ch5)
router.get('/graph/ch6',graphController.ch6)
router.get('/graph/ch7',graphController.ch7)
router.get('/graph/ch8',graphController.ch8)
router.get('/graph/ch9',graphController.ch9)
router.get('/graph/ch10',graphController.ch10)
router.get('/graph/ch11',graphController.ch11)
router.get('/graph/ch12',graphController.ch12)
// router.get('/graph/ch13',graphController.ch13)

router.get('/graph/*',graphController.comingSoon)

module.exports = router
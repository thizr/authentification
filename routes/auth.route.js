const router = require('express').Router()
const authCtrl = require('../contollers/auth.controller')
const validate = require('../middlewares/validator.middleware')


router.post('/signup', validate.input ,authCtrl.sign_up)
router.post('/login', authCtrl.login)

module.exports = router
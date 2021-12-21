const router = require('express').Router()
const authCtrl = require('../contollers/auth.controller')


router.post('/signup', authCtrl.sign_up)
router.post('/login', authCtrl.login)

module.exports = router
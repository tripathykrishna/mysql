const { getAllUser, login, registerUser, updateRegisterUser} = require("../controller/logincontroller.js");

const router = require('express').Router()

router.post('/adduser',registerUser)

router.get('/getuser',getAllUser)

router.post('/login',login)

router.put('/:id',updateRegisterUser)

module.exports = router;
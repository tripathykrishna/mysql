const {updateStudent,addStudent,getAllStudent,deleteStudent} = require("../controller/studentcontrole.js");

const router = require('express').Router()

router.post('/addStudent',addStudent)

router.get('/students',getAllStudent)

router.put('/:id',updateStudent)

router.delete('/delete/:id',deleteStudent)

module.exports = router;
const {updateTeacher,addTeacher,getAllTeacher,deleteTeacher} = require("../controller/teachercontroller.js");
const router = require('express').Router()

router.post('/addTeacher',addTeacher)

router.get('/teachers',getAllTeacher)

router.put('/:id',updateTeacher)

router.delete('/delete/:id',deleteTeacher)

module.exports = router; 
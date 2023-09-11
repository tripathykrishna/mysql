const {updateCourse,addCourse,getAllCourse,deleteCourse} = require("../controller/coursecontroller.js");

const router = require('express').Router()

router.post('/addCourse',addCourse)

router.get('/courses',getAllCourse)

router.put('/:id',updateCourse)

router.delete('/:id',deleteCourse)

module.exports = router;

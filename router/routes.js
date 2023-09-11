const {updateCourse,addCourse,getAllCourse,deleteCourse} = require("../controller/coursecontroller.js");
const {updateTeacher,addTeacher,getAllTeacher,deleteTeacher} = require("../controller/teachercontroller.js");
const {updateStudent,addStudent,getAllStudent,deleteStudent} = require("../controller/studentcontrole.js");
const {updateTopic,addTopic,getAllTopic,deleteTopic} =require("../controller/topiccontroller.js");

const router = require('express').Router()

router.post('/addCourse',addCourse)

router.get('/courses',getAllCourse)

router.put('/:id',updateCourse)

router.delete('/:id',deleteCourse)

// teacher
router.post('/addTeacher',addTeacher)

router.get('/teachers',getAllTeacher)

router.put('/:id',updateTeacher)

router.delete('/:id',deleteTeacher)

// student
router.post('/addStudent',addStudent)

router.get('/students',getAllStudent)

router.put('/:id',updateStudent)

router.delete('/:id',deleteStudent)

// Topic
router.post('/addTopic',addTopic)

router.get('/topices',getAllTopic)

router.put('/:id',updateTopic)

router.delete('/:id',deleteTopic)
module.exports = router;







// const routers = (app, mainpath) => {
//   app.get(mainpath + "/course", courseControllers.getAllCourse);

//   app.post(mainpath+"/add-new-course",courseControllers.getNewCourse ); 
  
//   app.put(mainpath +"/update-course",courseControllers. getUpdateData);

//   app.delete(mainpath +"/delete-course/:id",courseControllers. getRemoveProduct);

//   app.get(mainpath +"/get/teacherdata",teacherController.getAllTeacher);

//   app.post(mainpath + "/add-teacher",teacherController.getNewTeacher);

//   app.put(mainpath + "/update-teacherdata",teacherController.getUpdateTeacher);

//   app.delete(mainpath + "/delete-teacherdata/:id",teacherController.getRemoveTeacher);

//   app.get(mainpath + "/student",studentControle.getAllStudent);

//   app.post(mainpath + "/add-studentdata",studentControle.getNewStudent);

//   app.put(mainpath + "/update-studentdata",studentControle.getUpdateStudent);

//   app.delete(mainpath + "/delete-studuentdata/:id",studentControle.getRemoveStudent);

//   app.get(mainpath + "/topic",topiccotroller.getAllTopics);

//   app.post(mainpath + "/add-newtopic",topiccotroller.getNewTopics);

//   app.put(mainpath + "/update-topic",topiccotroller.getUpdateTopic);

//   app.delete(mainpath +"/delete-topicdata/:id",topiccotroller.getRemoveTopic);

// };


// module.exports = routers;

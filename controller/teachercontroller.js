const  db  = require("../model");

const Teacher = db.teachers

const addTeacher = async (req,res)=>{

  let info = {
   name: req.body.name,
   salary: req.body.salary,
   DOJ: req.body.DOJ,
   phone: req.body.phone,
  }
  const teacher =await Teacher.create(info)
  res.status(200).send(teacher)
  console.log(teacher)
}
//get student
const getAllTeacher = async (req,res)=> {

  let teacher = await Teacher.findAll({})
  res.status(200).send(teacher)
}

//update course

const updateTeacher = async(req,res) => {

  let id = req.params.id

  const teacher = await Teacher.update(req.body,{where: { id: id }})
  res.status(200).send(teacher)
}

//delete
const deleteTeacher = async(req,res) => {

  let id = req.params.id

   const delRes = await Teacher.destroy({where: { id: id }})
  res.status(200).send({delRes,msg:"teacher is deleted"})
}

module.exports ={
  addTeacher,
  getAllTeacher,
  updateTeacher,
  deleteTeacher
}
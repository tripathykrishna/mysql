const  db  = require("../model");

const Topic = db.topic
const course = db.courses
const addTopic = async (req,res)=>{

  let info = {
   name: req.body.name,
   duration: req.body.duration,
   courseId: req.body.courseId
  
  }
  const topic =await Topic.create(info)
  res.status(200).send(topic)
  console.log(topic)
}
//get studenttopic
const getAllTopic = async (req,res)=> {

  let topic = await Topic.findAll({})
  res.status(200).send(topic)
}

//update course

const updateTopic = async(req,res) => {

  let id = req.params.id

  const topic = await Topic.update(req.body,{where: { id: id }})
  res.status(200).send(topic)
}

//delete
const deleteTopic = async(req,res) => {

  let id = req.params.id

   const delRes = await Topic.destroy({where: { id: id }})
  res.status(200).send({delRes,msg:"topic is deleted"})
}

const oneToOne = async (req,res)=>{
  let data = await course.findAll({
    include:Topic,
    
  });
  res.status(200).json(data)
}

module.exports ={
  addTopic,
  getAllTopic,
  updateTopic,
  deleteTopic,
  oneToOne
}
const  db  = require("../model");

const Student = db.students

const addStudent = async (req,res)=>{

  let info = {
   name: req.body.name,
   DOB: req.body.DOB,
   rollno: req.body.rollno,
   class: req.body.class,
   section: req.body.section
  }
  const student =await Student.create(info)
  res.status(200).send(student)
  console.log(student)
}
//get student
const getAllStudent = async (req,res)=> {
try {
  let student = await Student.findAll({})
  res.status(200).send(student)
  
} catch (error) {
  console.error(error)
}
}

//update course

const updateStudent = async(req,res) => {

  let id = req.params.id

  const student = await Student.update(req.body,{where: { id: id }})
  res.status(200).send(student)
}

//delete
const deleteStudent = async(req,res) => {

  let id = req.params.id

   const delRes = await Student.destroy({where: { id: id }})
  res.status(200).send({delRes,message:"student is deleted"})
}

module.exports ={
  addStudent,
  getAllStudent,
  updateStudent,
  deleteStudent
}









// const studentControle = {
//   getAllStudent: (req, res) => {
//     const query = `select * from student`;
//     console.log(query);
//     connection.query(query, (error, results) => {
//       if (error) {
//         res.status(500).json({ error: "result not get" });
//         return;
//       }
//       res.json(results);
//     });
//   },
//   getNewStudent: (req, res) => {
//     const { body } = req;
//     const query =
//       "INSERT INTO student (name,id,DOB,rollno,class,section) VALUES(?,?,?,?,?,?)";
//     connection.query(
//       query,
//       [body.name, body.id, body.DOB, body.rollno, body.class, body.section],
//       (error, results) => {
//         if (error) {
//           res.status(500).json({ error: error });
//           return;
//         }
//         res.json(results);
//       }
//     );
//   },

//   getUpdateStudent:(req,res)=>{
//     console.log('called')
//     const{body}=req;
//     const query = `SELECT * FROM student where id=2`;
//     const q = `UPDATE student
//     SET name = ?, DOB = ?, rollno = ?, class = ?, section = ?
//     WHERE id = ?
//     `;
//       console.log(body)
//       const values =[body.name,body.DOB,body.rollno,body.class,body.section,body.id]
//       connection.query(query,(err,results)=>{
//         console.log(results,err);
//           if(err){
//             res.status(500).json({msg:'not found'});
//             return;
//           }
//           if(results.length>0){
//             connection.query(q,values,(err,updResult)=>{
//               if (err) {
//                 console.log(err);
//                 res.status(500).json({ err});
//                 return;
//               }
//               res.json(updResult);
//             })
//           }
//       })
//   },

//   getRemoveStudent:(req,res)=>{
//     const{body}= req;
//     const q=`select * from student where id=${req.params.id}`;
//     const delquery = `delete from student where id=${req.params.id}`;
    
//     connection.query(q,(error,results)=>{
//       if (error) {
//         res.status(500).json({msg:"not delete data"});
//         return;
//       }
//       if(results.length>0){
//         connection.query(delquery,(err,deleteRes)=>{
//           if(err){
//             res.status(500).json({msg:"not delete"});
//           }
//           res.json(deleteRes);
//         })
//       }
//     })
//   }
// };
// module.exports = studentControle;

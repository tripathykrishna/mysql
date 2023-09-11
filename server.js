const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const studentRouter = require("./router/student.routes.js");
const courseRouter = require("./router/course.routes.js");
const teacherRouter = require("./router/teacher.routes.js");
const topicRouter = require("./router/topic.routes.js");
const userRouter = require("./router/login.routes.js");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});




app.use('/api/course',courseRouter)
app.use('/api/student',studentRouter)
app.use('/api/teacher',teacherRouter)
app.use('/api/topic',topicRouter)
app.use('/api/login',userRouter)
// app.use('/api/registraion',ragistrationRouter)


const port = 9000;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.get("/api/get/coursestudentteacher",(req,res)=>{
//   const query=`select * from coursestudentteacher`;
//   connection.query(query,(error,results)=>{
//     if(error){
//       res.status(500).json({msg:"data not featched"});
//       return;
//     }
//     res.json(results);
//   })
// })

// app.post("/app/add-coursestudentteacher",(req,res)=>{
//   const {body}=req;
//   const query="INSERT INTO coursestudentteacher(studentId,teacherId,courseId) VALUES(?,?,?)";
//   connection.query(query,
//      [body.studentId,body.teacherId,body.courseId],
//     (error,results)=>{
//      if(error){
//       console.log(error,results)
//       res.status(500).json({msg:"not found"});
//       return;
//      }
//      res.json(results);
//     })
// })

// app.put("/api/update-coursestudentteacher",(req,res)=>{
  
//   const{body}=req;
//   const query = `SELECT * FROM coursestudentteacher where id=4`;
//   const q = `UPDATE coursestudentteacher
//   SET  studentId = ?, teacherId = ?, courseId = ?
//   WHERE id = ?
//   `;
//     console.log(body)
//     const values =[body.studentId,body.teacherId,body.courseId,body.id]
//     connection.query(query,(err,results)=>{
//       console.log(results,err);
//         if(err){
//           res.status(500).json({msg:'not found'});
//           return;
//         }
//         if(results.length>0){
//           connection.query(q,values,(err,updResult)=>{
//             if (err) {
//               console.log(err);
//               res.status(500).json({ err});
//               return;
//             }
//             res.json(updResult);
//           })
//         }
//     })
// })

// app.delete("/api/delete-coursestudentteacher/:id",(req,res)=>{
//   const q=`select * from coursestudentteacher where id=${req.params.id}`;
//   console.log(q)
//   const delquery = `delete from coursestudentteacher where id=${req.params.id}`;
  
//   connection.query(q,(error,results)=>{
//     if (error) {
//       res.status(500).json({msg:"not delete data"});
//       return;
//     }
//     if(results.length>0){
//       connection.query(delquery,(err,deleteRes)=>{
//         if(err){
//           res.status(500).json({msg:"not delete"});
//         }
//         res.json(deleteRes);
//       })
//     }
//   })
// })
// topic






//studentregistration server.js

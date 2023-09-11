const  db  = require("../model");

const Course = db.courses

const addCourse = async (req,res)=>{

  let info = {
   coursename: req.body.coursename,
   duration: req.body.duration,
  }
  const course =await Course.create(info)
  res.status(200).send(course)
  console.log(course)
}
//get course
const getAllCourse = async (req,res)=> {

  let courses = await Course.findAll({})
  res.status(200).send(courses)
}

//update course

const updateCourse = async(req,res) => {

  let id = req.params.id

  const course = await Course.update(req.body,{where: { id: id }})
  res.status(200).send(course)
}

//delete
const deleteCourse = async(req,res) => {

  let id = req.params.id

   const delRes=await Course.destroy({where: { id: id }})
  res.status(200).send({delRes,message:"couse is deleted"})
}

module.exports ={
  addCourse,
  getAllCourse,
  updateCourse,
  deleteCourse
}



// const courseControllers = {
//   getAllCourse: (req,res) => {
//     const query = `SELECT * FROM course`;
//     console.log(query);
//     connection.query(query, (error, results) => {
//       if (error) {
//         res.status(500).json({ error: "Failed to retrieve course data" });
//         return;
//       }
//       res.json(results);
//     });
//   },

//   getNewCourse:(req,res) =>{
//     const { body } = req;
//     console.log(body);
//     const query = "INSERT INTO course (coursename,duration) VALUES (  ?,?)";
//     connection.query(
//       query,
//       [ body.coursename, body.duration],
//       (error, results) => {
//         if (error) {
//           console.error("Eeegegggy:", error);
//           res.status(500).json({ error: "Failed to retrieve course data" });
//           return;
//         }
//         res.json(results);
//       }
//     );
//   },

//     getUpdateData:(req, res) => {
//     // req body ru data bahar kara
//     const { body } = req;
//     console.log(body);
//     const query = `SELECT * FROM course where id=2`;
//     const sql = `UPDATE course
//                  SET  coursename = ?, duration = ?
//                  WHERE id = ?`;
  
//     const values = [body.coursename,body.duration,body.id];
//     console.log(query);
//     connection.query(query, (error, results) => {
//       console.log(error, results);
//       if (error) {
//         res.status(500).json({ msg: "there is no data in it" });
//         return;
//       }
//       if (results.length > 0) {
//         connection.query(sql, values, (err, updateRes) => {
//           if (err) {
//             console.log(err);
//             res.status(500).json({ msg: "not update" });
//             return;
//           }
//           res.json(updateRes);
//         });
//       }
//     });
//   },

//   getRemoveProduct:(req, res) => {
//     const { body } = req;
//     console.log(body);
//     const query = `select * from course where id=${req.params.id}`;
//     const delQuery = `delete from course where id=${req.params.id}`;
  
//     connection.query(query, (error, results) => {
//       if (error) {
//         res.status(500).json({ msg: "not delete" });
//         return;
//       }
//       console.log(results);
//       if (results.length > 0) {
//         connection.query(delQuery, (err, deleteRes) => {
//           if (err) {
//             res.status(500).json({ msg: "unable to delete" });
//           }
//           res.json(deleteRes);
//         });
//       }
//     });
//   }
// };

// module.exports = courseControllers;

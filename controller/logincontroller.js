const  db  = require("../model");

const User = db.user 
const jwt = require("jsonwebtoken");
// sonwebtoken

const registerUser = async (req,res)=>{

    let info = {
      firstname:req.body.firstname,
     lastname:req.body.lastname,
     email: req.body.email,
     password: req.body.password,
     
    }
    const user =await User.create(info)
    res.status(200).send(user)
    console.log(user)
  }
  
  const getAllUser = async (req,res)=>{
    
    let user = await User.findAll({})
    res.status(200).send(user)
  }

  const  updateRegisterUser = async (req,res)=>{
// kama kala thik login vedio kai kemiti karibi jwt
    let id = req.params.id
    const user = await User.update(req.body,{where: {id:id} })
    console.log(user)
    res.status(200).send({
      status:true,
      message:user[0]
    })
  }
  const login= async (req,res)=>{
const {email,password}=req.body

// check kariba ki ei userid re data kan achi 
console.log(email,password)
const user= await User.findOne({
  where: {
    email:email,
    password:password,
    
  },
})

if (user && password === user.password) {
  const token = jwt.sign({ id: user.id }, "mySecret", { expiresIn: '1h' });
  res.send({
    status: true,
    message: "fetched",
    data: { ...user.toJSON(), token },
  });
} else {
  res.send (
    {
      status: false,
      message: "Email & Password Doesnot Match",
    }
  )
}
  }
  module.exports ={
    registerUser,
    getAllUser,
    updateRegisterUser,
    login
  }



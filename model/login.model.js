module.exports= (sequelize,Sequelize)=>{

    const user = sequelize.define("user",{
        firstname:{
            type:Sequelize.STRING,
            require:true
          },
    
          lastname:{
            type:Sequelize.STRING
          },
    
          email:{
            type:Sequelize.STRING
          },
    
          password:{
            type:Sequelize.STRING
          }
    
       

    })
    sequelize.sync({ force: false });
    return user;
}
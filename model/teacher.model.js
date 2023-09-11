module.exports = (sequelize,Sequelize)=>{
    const teacher =sequelize.define("teacher",{
      name:{
       type:Sequelize.STRING
      },
      salary:{
        type:Sequelize.INTEGER
      },
      DOJ:{
       type:Sequelize.STRING
      } ,
      phone:{
       type:Sequelize.STRING
      } 
    })
    sequelize.sync({ force: false });
    return teacher;
}
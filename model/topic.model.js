module.exports= (sequelize,Sequelize)=>{

    const topic = sequelize.define("topic",{
        name:{
         type:Sequelize.STRING
        },
        duration:{
         type:Sequelize.STRING
        },
        courseId:{
         type:Sequelize.INTEGER
        }

    })
    sequelize.sync({ force: false });
    return topic;
}
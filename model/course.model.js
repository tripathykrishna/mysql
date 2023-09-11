module.exports =(sequelize,Sequelize)=>{
// console.log(Sequelize)
    const Course = sequelize.define("course",{
        coursename: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.INTEGER
        }
    })
    sequelize.sync({ force: false  });
    return Course;
    
}
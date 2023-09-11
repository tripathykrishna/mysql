module.exports=(sequelize,Sequelize) => {

    const Student = sequelize.define("student",{
       name:{
        type: Sequelize.STRING
       },
       DOB:{
        type: Sequelize.STRING
       },
       rollno:{
        type: Sequelize.INTEGER
       },
       class:{
        type: Sequelize.STRING
       },
       section:{
        type: Sequelize.STRING
       }
    })
    sequelize.sync({ force: false });
    return Student;
}
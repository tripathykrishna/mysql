const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    define: {
      "timestamps": false
    },
    freezeTableName: true,
    logging:true,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  sequelize.authenticate()
  .then(()=>{
    console.log('connected')
  })
  .catch(err=>{
    console.log('error'+err)
  })

  
  const db = {};
  db.Sequelize =Sequelize
  db.courses = require("./course.model.js")(sequelize,Sequelize)
  db.students = require("./student.model.js")(sequelize,Sequelize)
  db.teachers = require("./teacher.model.js")(sequelize,Sequelize)
  db.topic = require("./topic.model.js")(sequelize,Sequelize)
  db.user = require("./login.model.js")(sequelize,Sequelize)
  

  db.courses.hasOne(db.topic,{foreignKey:'courseId'});
  db.topic.belongsTo(db.courses);
  
  module.exports = db;

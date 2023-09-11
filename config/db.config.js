module.exports = {
    HOST: "127.0.0.1",
    USER: "krishna",
    PASSWORD: "Krishna@123#",
    DB: "sequlize",
    dialect: "mysql",
    freezeTableName: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

const configsDB = 

  {
    HOST: "localhost",
    USER: "root",
    PASSWORD: null,
    DB: "booking_care",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

export default configsDB

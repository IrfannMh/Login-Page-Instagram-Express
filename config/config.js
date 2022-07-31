const dotenv = require('dotenv');
dotenv.config();

const {
  DATABASE_NAME = 'skripsi',
  DATABASE_USERNAME = null,
  DATABASE_PASSWORD = null,
  DATABASE_HOSTNAME = 'localhost'
} = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: `${DATABASE_NAME}_development`,
    host:DATABASE_HOSTNAME,
    dialect: "postgres",
  },
  test: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: `${DATABASE_NAME}_test`,
    host:DATABASE_HOSTNAME,
    dialect: "postgres",
  },
  production: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host:DATABASE_HOSTNAME,
    dialect: "postgres",
    dialectOptions: {
      ssl:{
        require:true,
        rejectUnauthorized: false,
      }
    }
  },
}
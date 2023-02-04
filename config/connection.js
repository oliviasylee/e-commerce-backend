const Sequelize = require('sequelize');
require('dotenv').config();

// JAWSDB_URL is an environment variable that contains the connection string for a database hosted on JawsDB, which is a fully managed MySQL database service for use with applications hosted on the Heroku platform.  
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // Require SSL connection
      rejectUnauthorized: false // Accept self-signed certificates
    }
  }
});

module.exports = db;

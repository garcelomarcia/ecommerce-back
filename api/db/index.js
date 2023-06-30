const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    "postgresql://myuser:mypassword@187.162.118.101:5432/ecommerce",
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // This line allows you to connect to a database with a self-signed certificate
      },
    },
  }
);

module.exports = sequelize;

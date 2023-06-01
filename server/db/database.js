const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5173/astrotrade", {
  logging: false,
});

module.exports = db;

import Sequelize from "sequelize";

const db = new Sequelize("postgres://localhost:5173/astrotrade", {
  logging: false,
});

export default db;

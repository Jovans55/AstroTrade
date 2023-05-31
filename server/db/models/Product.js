const Sequelize = require("sequelize");
const db = require("../database");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  popular: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Product;

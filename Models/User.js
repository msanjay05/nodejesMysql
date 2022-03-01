const Sequelize = require("sequelize");
const sequelize = require("../Database/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(10),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true,
    validate:{
      notEmpty:true
    }
  },
  age: {
    type: Sequelize.INTEGER(3),
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = User;

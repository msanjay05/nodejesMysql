const Sequelize = require('sequelize');

const sequelize = new Sequelize('User', 'root', 'San@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

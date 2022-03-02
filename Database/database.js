const Sequelize = require('sequelize');

const sequelize = new Sequelize('MyProject', 'root', 'MyNewPass!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

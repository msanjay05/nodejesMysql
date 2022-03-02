const Sequelize = require('sequelize');

const sequelize = new Sequelize('MyProject', 'root', 'MyNewPass5!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

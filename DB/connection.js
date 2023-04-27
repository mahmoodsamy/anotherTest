export const Sequelize = require("sequelize");

module.exports = new Sequelize(
  'mysql_demo',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);


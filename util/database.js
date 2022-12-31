const Sequelize = require('sequelize')
const sequelize = new Sequelize('node-complete', 'root', '18330468', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize
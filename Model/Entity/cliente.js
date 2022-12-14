//cliente.js
const Sequelize = require('sequelize');
const database = require('./dborm');

const cliente = database.sequelize.define('cliente', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.INTEGER
    },
    endereco: Sequelize.STRING
    
})

module.exports = {Cliente}
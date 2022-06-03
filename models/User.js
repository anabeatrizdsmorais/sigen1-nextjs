const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Cria a tabela
User.sync();

//Verifica se há alguma diferenca na tabela, realizar a alteração
//User.sync({ alter: true })

module.exports = User;

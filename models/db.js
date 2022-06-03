const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão feita com sucesso.");
}).catch(function(){
    console.log("Erro de conexão com banco de dados.");
});

module.exports = sequelize;
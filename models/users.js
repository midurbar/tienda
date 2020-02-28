const Sequelize= require('sequelize');
const sequelize= require('./db');

//definimos el modelo para usuario
const Usuario=sequelize.define('usuario',{
    email:Sequelize.STRING(50),
    password:Sequelize.STRING(80),
    nombre:Sequelize.STRING,
    apellidos:Sequelize.STRING
});

module.exports=Usuario;


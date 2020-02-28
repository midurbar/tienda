const Sequelize= require('sequelize');
const sequelize= require('./db');

//definimos el modelo para usuario
const Usuario=sequelize.define('usuario',{
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    nombre:Sequelize.STRING,
    apellidos:Sequelize.STRING
});

module.exports=Usuario;


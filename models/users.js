const Sequelize= require('sequelize');
const sequelize= require('./db');

//definimos el modelo para usuario
const Usuario=sequelize.define('usuario',{
    email:{type: Sequelize.STRING(100),allowNull:false, unique:true},
    password:Sequelize.STRING(40),
    nombre:Sequelize.STRING(50),
    apellidos:Sequelize.STRING(80)
});

module.exports=Usuario;


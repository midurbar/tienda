const Sequelize= require('sequelize');
const sequelize= require('./db');

//definimos el modelo para usuario
const Carrito=sequelize.define('carrito',{
});

module.exports=Carrito;
const Sequelize= require('sequelize');

//Primero definimos  sequelize con los parametros de conexion
const sequelize= new Sequelize('tiendaonline','root','',{
  host:'localhost',
  dialect:'mariadb'
});

module.exports=sequelize;
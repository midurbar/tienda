const Sequelize= require('sequelize');
const sequelize= require('./db');

//definimos el modelo para usuario
const Pedido=sequelize.define('pedido',{
    estado:Sequelize.ENUM('PDTE_PAGO','PAGADO','CANCELADO','EN_TRANSITO','COMPLETO'),
    direccionEntrega:Sequelize.STRING(200)
});

module.exports=Pedido;
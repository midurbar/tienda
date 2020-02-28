const sequelize= require('./db');
const Producto= require('./products.js');
const Usuario=require('./users.js');
const Carrito=require('./cart.js');
const Pedido=require('./order.js');

Usuario.hasOne(Carrito);
Carrito.belongsTo(Usuario);

//Finalmente conectamos con la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({alter:true});
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports ={
      Producto,
      Usuario,
      Pedido,
      Carrito
  }
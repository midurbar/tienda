var express = require('express');
var router = express.Router();

const { Producto, Usuario } =require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.session.username;

  Producto.findAll().then(products => {
    res.render('index', { title: 'tu tienda online', username, products });
  })

});

//Pagina con los detalles de un producto por la referencia

router.get('/products/:ref', function (req, res, next) {
  // Obtengo la referencia del producto a partir de la ruta
  var ref = req.params.ref;

  Producto.findOne({
    where: {ref: ref}
  }).then(product => {
    if (product) {
      // Pasamos los datos del producto a la plantilla
      res.render('product', {product});
    } else {
      // Si no encontramos el producto con esa referencia, redirigimos a página de error.
      res.redirect("/error");
    }
  })

});

var cesta = []; //provisional

router.post("/comprar", function (req, res, next) {
  const ref = req.body.ref;

  // Busco entre los productos el que coincide con la referencia
  const product = products.find(function(p) { 
    return p.ref==ref; 
  });

  // Añadimos producto a la cesta
  cesta.push(product);
  // Redirigimos a página de productos
  res.redirect("/");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/register", function (req, res, next) {
  res.render("register",{error: undefined});
});

/**
 * Procesamiento del formulario de login. Obtiene los datos del formulario en la
 * petición (req) y comprueba si hay algún usuario con ese nombre y contraseña.
 * Si coincide, genera una cookie y dirige a la página principal.
 * Si no coincide, vuelve a cargar la página de login para mostrar un error.
 */
router.post("/login", function (req, res, next) {
  const {email, password} = req.body;

  Usuario.findOne({where: {email,password}})
  .then(usuario => {
    if (usuario) {
      req.session.usuarioId = usuario.id;
      res.redirect("/");
    } else {
      //TODO: inyectar mensaje de error en plantilla
      res.render("login");
    }
  });

});

router.post("/register", function (req, res, next) {
  const datos=req.body;
  if (datos.nombre.length==0){
    res.render("register",{datos, error:"Nombre no puede estar vacio"});
  }else if (datos.apellidos.length==0){
    res.render("register",{datos, error:"Apellidos no puede estar vacio"});
  }else if (datos.email.length==0){
    res.render("register",{datos, error:"Email no puede estar vacio"});
  }else if (datos.password.length<6) {
    res.render("register", {datos, error:"La contraseña debe tener al menos 6 caracteres."})
  }
  else if (datos.password != datos.repassword) {
    res.render("register", {datos, error:"Las contraseñas no coinciden."})
  }else {
    Usuario.create(datos)
    .then(usuario => {
      res.redirect("/login");
    })
  }
});

module.exports = router;


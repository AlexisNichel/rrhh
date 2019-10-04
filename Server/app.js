'use strict';
/*Importamos las librerías*/
var express = require('express');
var http = require('http');
/*Importamos las configuraciónes*/
var expressConfig = require('./config/express');
var enviromentConfig = require('./config/index');
/*Importamos las rutas*/
var registerRoutes = require('./routes');
/*Importamos db*/
var sqldb = require('./sqldb');
/*Instanciamos express y aplicamos config y rutas*/
var app = express();
expressConfig(app);
registerRoutes(app);
/*Acceso Cross A las definiciones*/
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
}
app.use(allowCrossDomain);
/*Crear server http*/
var server = http.createServer(app);
function startServer() {
  app.angularServer = server.listen(enviromentConfig.port, enviromentConfig.ip, function () {
    console.log(`Servidor escuchando en ${enviromentConfig.port}, en modo ${app.get('env')}`);
  });
}
/*Sincronizar DB e iniciar servicio*/
sqldb.sequelize.sync()
  .then(startServer())
  .catch(err => {
    console.log(`Error al conectar a DB: ${err}`);
  });

module.exports = app;

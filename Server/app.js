'use strict';
/*Importamos las librerías*/
var express = require('express'); 
var http = require('http');
/*Importamos las configuraciónes*/
var expressConfig = require('./config/express'); 
var enviromentConfig = require('./config/index'); 
/*Importamos las rutas*/
var registerRoutes = require('./routes'); 
/*Instanciamos express y aplicamos config y rutas*/
var app = express();
expressConfig.config(app);
registerRoutes.routes(app);
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
/*Iniciar servicio*/
startServer();

module.exports = app;

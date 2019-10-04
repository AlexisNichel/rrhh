'use strict';
/*Importamos las librerías*/
var path = require('path');
var enviromentConfig = require('../config/index'); 
var Sequelize = require('sequelize'); 
/*configurar sequelize*/
var db = {
  Sequelize,
  sequelize: new Sequelize(enviromentConfig.sequelize.uri, enviromentConfig.sequelize.options)
};
/*Sequelize Models*/
db.Business = db.sequelize.import('../api/business/business.model');

/*Sequelize Relations*/
//Cargar relaciones

module.exports = db;
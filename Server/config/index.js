'use strict';
/*Importamos las librerías*/
var path = require('path');
var _ = require('lodash');

/*generamos variables*/
var all = {
  env: process.env.NODE_ENV || 'development',    
  root: path.normalize(`${__dirname}/../../..`),
  port: process.env.PORT || 9000,
  ip: process.env.IP || '0.0.0.0',
  secrets: {
    session: 'rrhh-sys-nichel-jaquie'
  }
};
// Exportar basado en el entorno
module.exports = _.merge(
  all,
  require('./shared').default,
  require(`./${all.env}.js`) || {});

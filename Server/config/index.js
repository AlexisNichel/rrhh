'use strict';
/*Importamos las librerías*/
var path = require('path');
var _ = require('lodash');

/*generamos variables*/
var all = {
  env: process.env.NODE_ENV || 'development',
  root: path.normalize(`${__dirname}/../../..`),
  port: process.env.PORT || 2002,
  ip: process.env.IP || '0.0.0.0',
  secrets: {
    session: 'rrhh-sys-nichel-jaquie'
  },
  sequelize: {
    uri: process.env.POSTGRES_URL || 'postgres://postgres:postgres@localhost:5432/rrhh',
    options: {
      dialect: 'postgres',  
      define: {
        timestamps: true, 
        freezeTableName: true
      }
    }
  }
};
// Exportar basado en el entorno
module.exports = _.merge(
  all,
  require('./shared').default,
  require(`./${all.env}.js`) || {});

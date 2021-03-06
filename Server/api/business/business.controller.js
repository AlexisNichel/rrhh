'use strict';
var Sql = require('../../sqldb');

module.exports.index = function (req, res) {
  return Sql.Business.findAll()
  .then(respondWithResult(res))
  .catch(handleError(res));
}










//separar
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}


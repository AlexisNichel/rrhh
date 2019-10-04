'use strict';
/*Definicion de las rutas*/
module.exports = {
  routes: function (app) {
    /*Colocar cada ruta*/
    app.use('/', require('./api/index'));



    /*Control de errores de ruta*/
    app.use(function (req, res, next) {
      res.status(404);
      res.render('404');
    });
    app.use(function(err, req, res, next) {
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
      res.status(err.status || 500);
      res.render('404');
    });
    return app;
  }
};

'use strict';
/*Importamos las librerías*/
var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');

module.exports = function (app) {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    /*Set paths*/
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(".." + __dirname + '/client'));
    app.use('/uploads', express.static('./uploads/'));
    /*Set engine*/
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    return app;
};

'use strict';
/*Importamos las librerías*/
var multer = require('multer');
var enviromentConfig = require('../../config/index');

module.exports.create = function (req, res) {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, ("./uploads"));
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage }).any('file');
  upload(req, res, (err) => {
    console.log(err);
    if (err) {
      return res.status(400).send(err);
    }
    let results = req.files.map((file) => {
      return {
        mediaName: file.filename,
        origMediaName: file.originalname,
        mediaSource: enviromentConfig.serverName + "/uploads/" + file.filename
      }
    });
    res.status(200).json(results);
  });
}
'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('business', {
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    razon_social_empresa: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ruc_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg: 'Ya existe una empresa con el mismo ruc'
      },
    },
    telefono_empresa: {
      type: DataTypes.STRING(50)
    },
    direccion_empresa: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    estado_empresa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    logo_empresa: {
      type: DataTypes.STRING(500),
      defaultValue: 'assets/img/business.png'
    },
  });
}

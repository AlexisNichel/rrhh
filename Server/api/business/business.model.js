'use strict';

export default function (sequelize, DataTypes) {
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
    id_ciudad: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ciudad',
        key: 'id_ciudad'
      },
      allowNull: false
    },
    estado_empresa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    fecha_registro: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    fecha_actualizacion: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    id_usuario_registro: {
      type: DataTypes.INTEGER
    },
    id_usuario_actualizacion: {
      type: DataTypes.INTEGER
    },
    logo_empresa: {
      type: DataTypes.STRING(500),
      defaultValue: 'assets/img/business.png'
    },
  });
}

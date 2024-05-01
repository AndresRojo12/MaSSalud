const { Model, DataTypes, Sequelize } = require('sequelize');

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  name: {
    allowNull:false,
    type:DataTypes.STRING,
  },

  lastName: {
    allowNull:false,
    type:DataTypes.STRING,
    field: 'last_name',
  },

  secondSurname: {
    allowNull:false,
    type:DataTypes.STRING,
    field: 'second_surname'
  },

  identificationCard: {
    allowNull:false,
    type:DataTypes.INTEGER,
    field: 'identification_card',
    unique:true
  },

  expeditionDate: {
    allowNull:false,
    type:DataTypes.DATE,
    field: 'expedition_date'
  },

  birthdate: {
    allowNull:false,
    type:DataTypes.DATE,
  },

  gender: {
    allowNull:false,
    type:DataTypes.STRING,

  },

  phone: {
    allowNull:false,
    type:DataTypes.STRING,
    unique: true
  },

  eps: {
    allowNull:false,
    type:DataTypes.STRING,
  },

  email:{
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  password:{
    allowNull:false,
    type:DataTypes.STRING,
  },

  createdBy: {
    type: DataTypes.INTEGER,
    field: 'create_by',
    references: {
      model: USUARIO_TABLE,
      key: 'id'
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    field: 'update_by',
    references: {
      model: USUARIO_TABLE,
      key: 'id'
    },
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'update_at',
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deletedBy: {
    type: DataTypes.INTEGER,
    field: 'delete_by',
    references: {
      model: USUARIO_TABLE,
      key: 'id'
    },
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'delete_at',
  },
}

class Usuario extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName : USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}

module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };
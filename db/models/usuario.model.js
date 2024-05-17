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
    allowNull:true,
    type:DataTypes.STRING,
  },

  lastName: {
    allowNull:true,
    type:DataTypes.STRING,
    field: 'last_name',
  },

  secondSurname: {
    allowNull:true,
    type:DataTypes.STRING,
    field: 'second_surname'
  },

  documentType: {
    allowNull:true,
    type:DataTypes.STRING,
    field:'document_type'
  },

  identificationCard: {
    allowNull:true,
    type:DataTypes.INTEGER,
    field: 'identification_card',
    unique:true
  },

  expeditionDate: {
    allowNull:true,
    type:DataTypes.DATE,
    field: 'expedition_date'
  },

  birthdate: {
    allowNull:true,
    type:DataTypes.DATE,
  },

  gender: {
    allowNull:true,
    type:DataTypes.STRING,

  },

  phone: {
    allowNull:true,
    type:DataTypes.STRING,
    unique: true
  },

  eps: {
    allowNull:true,
    type:DataTypes.STRING
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
  recoveryToken:{
    field: 'recovery_token',
    allowNull:true,
    type:DataTypes.STRING,
  },

  role: {
    allowNull:false,
    type:DataTypes.STRING,
    defaultValue:'paciente'
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
  static associate(models) {
    this.hasOne(models.CitaMedica, {
      as: 'cita_medica',
      foreignKey: 'userId'
    })
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

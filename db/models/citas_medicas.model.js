const { Model, DataTypes, Sequelize } = require('sequelize');
const { USUARIO_TABLE } = require('./usuario.model');

const CITA_TABLE = 'citas';

const CitaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  userId:{
      allowNull: false,
      field: 'user_id',
      type: DataTypes.INTEGER,
      unique:true,
      references: {
        model: USUARIO_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
  },

  specialty: {
    allowNull:true,
    type:DataTypes.STRING,
  },

  doctor: {
    allowNull:false,
    type:DataTypes.STRING,
  },

  schedule: {
    allowNull:false,
    type:DataTypes.STRING,
  },

  workingDay: {
    allowNull:false,
    type:DataTypes.STRING,
    field: 'working_day'
  },
  
  date: {
    allowNull:true,
    type:DataTypes.DATEONLY,
  },

  hour: {
    allowNull:true,
    type:DataTypes.TIME,
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

class CitaMedica extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, {
      as: 'user'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName : CITA_TABLE,
      modelName: 'CitaMedica',
      timestamps: false
    }
  }
}

module.exports = { CITA_TABLE, CitaSchema, CitaMedica };

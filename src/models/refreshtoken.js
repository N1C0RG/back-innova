'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RefreshToken.belongsTo(models.User, { 
        foreignKey: 'userId', 
        as: 'user', 
      }); 
    }; 
  }
  RefreshToken.init({
    token: {
    type: DataTypes.STRING,
    allowNull: false // Esto debe ir dentro de la configuración del campo
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER, // Asegúrate de que coincida con el tipo de ID de tu User
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'RefreshToken',
  });
  return RefreshToken;
};
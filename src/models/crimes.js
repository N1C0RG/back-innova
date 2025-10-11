'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crimes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(
        models.Record, {foreignKey: 'crime_id'}
      )
    }
  }
  Crimes.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    interested_entity: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    warning: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Crimes',
  });
  return Crimes;
};
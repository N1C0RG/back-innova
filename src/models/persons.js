'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(
        models.Record, {foreignKey: 'person_id'}
      );
    }
  }
  Persons.init({
    name: DataTypes.STRING,
    rut: DataTypes.STRING,
    email: DataTypes.STRING,
    travel_type: DataTypes.STRING,
    travel_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Persons',
  });
  return Persons;
};
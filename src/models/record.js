'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(
        models.Persons, {foreignKey: 'persons_id'}
      );
      this.belongsTo(
        models.Crimes, {foreignKey: 'crime_id'}
      );
    }
  }
  Record.init({
    person_id: DataTypes.INTEGER,
    crime_id: DataTypes.INTEGER,
    recorded_date: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};
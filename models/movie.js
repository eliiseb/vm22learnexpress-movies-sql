'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {

    snippet(){
      return this.description.substring(0,300);
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User); //Movie and User are associated
    }
  }
  Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING //Path to picture associated with movie
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
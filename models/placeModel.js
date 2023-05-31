import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'

const queryInterface = sequelize.getQueryInterface()

queryInterface.createTable('Place', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

export const Place = sequelize.define(
  'Place',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'places',
    updatedAt: false,
    createdAt: false,
  }
)

await Place.sync({ force: true })

import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'

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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    tableName: 'places',
    updatedAt: false,
    createdAt: false,
  }
)

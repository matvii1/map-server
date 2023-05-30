import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'

export const Place = sequelize.define(
  'Place',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Assuming it's an auto-incrementing primary key
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

// await Place.create({
//   id: 3,
//   name: 'Name',
//   description: '123123',
//   longitude: 123,
//   latitude: 321,
// })

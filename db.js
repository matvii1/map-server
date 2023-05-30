import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()

export const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
)

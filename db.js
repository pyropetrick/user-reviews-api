import { Sequelize } from "sequelize";

const options = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  define: {
    timestamps: "false",
  },
};

export const dataBase = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  { ...options }
);

import { Sequelize } from "sequelize";

const db = new Sequelize({
  host: "localhost",
  username: "postgres",
  database: "models_db",
  port: 5432,
  password: "root",
  dialect: "postgres",
  dialectOptions: { ssl: { required: true, rejectUnauthorized: false } },
});

// para local comentamos el dialect options

export default db;

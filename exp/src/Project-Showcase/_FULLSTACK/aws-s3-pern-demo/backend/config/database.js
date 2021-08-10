import config from "./index";

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

export default {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    seederStorage: "sequelize",
  },
};

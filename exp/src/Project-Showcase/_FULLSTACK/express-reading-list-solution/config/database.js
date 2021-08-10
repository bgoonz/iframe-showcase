const { username, password, database, host } = require("./index").db;

export default {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
};

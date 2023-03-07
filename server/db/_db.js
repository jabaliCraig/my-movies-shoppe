const Sequelize = require("sequelize");
const pkg = require("../../package.json");
require("dotenv").config();
const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");
const config = {
  logging: false,
};
if (process.env.LOGGING === "true") {
  delete config.logging;
}
const db = new Sequelize(
  process.env.DATABASE_URL,
  config
);
module.exports = db;
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
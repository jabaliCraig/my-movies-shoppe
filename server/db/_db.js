const Sequelize = require('sequelize');
require("dotenv").config();
const config = {
  logging: false,
}
 if(process.env.LOGGING){
  delete config.logging;
 }


const db = new Sequelize(process.env.DATABASE_URL ||'postgres://craig:tVkAfiLkOO5Bi1mJ1HWzMstmWrmIcnd6@dpg-cg38cs5269v3bp90c43g-a/grace_cinema_l074', config);

module.exports = db;
